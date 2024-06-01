from django.http import JsonResponse
from notion_client import Client
from urllib.parse import urljoin
import requests
import os
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

def index(request):
    try:
        notion_token = os.environ.get('NOTION_TOKEN')
        database_id = os.environ.get('NOTION_DATABASE_ID')

        logging.debug(f"NOTION_TOKEN: {notion_token}")
        logging.debug(f"NOTION_DATABASE_ID: {database_id}")

        if not notion_token:
            raise ValueError("NOTION_TOKEN environment variable is not set.")
        if not database_id:
            raise ValueError("NOTION_DATABASE_ID environment variable is not set.")

        notion = Client(auth=notion_token)
        
        logging.debug(f"Querying Notion database: {database_id}")
        data = notion.databases.query(database_id)
        
        logging.debug(f"Data received from Notion: {data}")

        # Use the correct key 'results'
        return JsonResponse(data["results"], safe=False, status=200)
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)

def get_notion_headers():
    notion_token = os.getenv('NOTION_TOKEN')
    if not notion_token:
        raise ValueError("NOTION_TOKEN environment variable is not set.")
    return {
        'Authorization': f"Bearer {notion_token}",
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
    }

def block_to_markdown(block):
    """
    Convert a Notion block to Markdown.
    """
    block_type = block['type']
    
    if block_type == 'heading_1':
        return f"# {block['heading_1']['rich_text'][0]['plain_text']}\n\n"
    elif block_type == 'heading_2':
        return f"## {block['heading_2']['rich_text'][0]['plain_text']}\n\n"
    elif block_type == 'heading_3':
        return f"### {block['heading_3']['rich_text'][0]['plain_text']}\n\n"
    elif block_type == 'paragraph':
        return f"{block['paragraph']['rich_text'][0]['plain_text']}\n\n"
    elif block_type == 'bulleted_list_item':
        return f"- {block['bulleted_list_item']['rich_text'][0]['plain_text']}\n\n"
    elif block_type == 'numbered_list_item':
        return f"1. {block['numbered_list_item']['rich_text'][0]['plain_text']}\n\n"
    elif block_type == 'image':
        return f"![{block['image']['caption']}]({block['image']['file']['url']})\n\n"
    # Add more block types as needed
    return ""

def blog_page(request, page_id):
    try:
        headers = get_notion_headers()

        page_url = urljoin('https://api.notion.com/v1/', f"blocks/{page_id}/children?page_size=100")

        response = requests.get(page_url, headers=headers)  # Use requests.get here
        response.raise_for_status()
        page_content = response.json()

        logging.debug(f"Page content received from Notion: {page_content}")

        markdown_content = ""
        for block in page_content['results']:
            markdown_content += block_to_markdown(block)

        return JsonResponse({'markdown': markdown_content}, status=200)
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)