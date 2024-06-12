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
        data = notion.databases.query(database_id=database_id)
        
        logging.debug(f"Data received from Notion: {data}")

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

def rich_text_to_markdown(rich_text):
    """
    Convert rich text to Markdown.
    """
    markdown = ''
    for text_part in rich_text:
        text = text_part['plain_text']
        link = text_part.get('href')
        annotations = text_part.get('annotations', {})
        
        # Handle inline code and math annotations
        code_annotation = annotations.get('code', False)
        math_annotation = annotations.get('math', False)  # Math detection

        if code_annotation:
            markdown += f"`{text}`"
        elif math_annotation:
            markdown += f"${text}$"  # Inline math notation
        else:
            if link:
                markdown += f"[{text}]({link})"
            else:
                markdown += text
    return markdown

def block_to_markdown(block, indent=0):
    """
    Convert a Notion block to Markdown.
    """
    block_type = block['type']
    indent_space = '  ' * indent  # Two spaces for each level of indentation

    if block_type == 'heading_1':
        return f"{indent_space}# {rich_text_to_markdown(block['heading_1']['rich_text'])}\n\n"
    elif block_type == 'heading_2':
        return f"{indent_space}## {rich_text_to_markdown(block['heading_2']['rich_text'])}\n\n"
    elif block_type == 'heading_3':
        return f"{indent_space}### {rich_text_to_markdown(block['heading_3']['rich_text'])}\n\n"
    elif block_type == 'paragraph':
        return f"{indent_space}{rich_text_to_markdown(block['paragraph']['rich_text'])}\n\n"
    elif block_type == 'bulleted_list_item':
        markdown = f"{indent_space}- {rich_text_to_markdown(block['bulleted_list_item']['rich_text'])}\n"
        if block['has_children']:
            child_blocks = fetch_child_blocks(block['id'])
            for child in child_blocks:
                markdown += block_to_markdown(child, indent + 1)
        return markdown
    elif block_type == 'numbered_list_item':
        markdown = f"{indent_space}1. {rich_text_to_markdown(block['numbered_list_item']['rich_text'])}\n"
        if block['has_children']:
            child_blocks = fetch_child_blocks(block['id'])
            for child in child_blocks:
                markdown += block_to_markdown(child, indent + 1)
        return markdown + "\n\n"
    elif block_type == 'code':
        return f"```\n{rich_text_to_markdown(block['code']['rich_text'])}\n```\n\n"
    elif block_type == 'equation':
        print(block['equation']['expression'])
        return f"$$\n{block['equation']['expression']}\n$$\n\n"
    elif block_type == 'image':
        return f"{indent_space}![{rich_text_to_markdown(block['image']['caption'])}]({block['image']['file']['url']})\n\n"
    # Add more block types as needed
    return ""

def fetch_child_blocks(block_id):
    """
    Fetch child blocks for a given block_id.
    """
    try:
        headers = get_notion_headers()
        url = urljoin('https://api.notion.com/v1/', f"blocks/{block_id}/children?page_size=100")
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()['results']
    except requests.RequestException as e:
        logging.error(f"Error fetching child blocks: {str(e)}")
        return []

def blog_page(request, page_id):
    try:
        headers = get_notion_headers()

        page_url = urljoin('https://api.notion.com/v1/', f"blocks/{page_id}/children?page_size=100")

        response = requests.get(page_url, headers=headers)
        response.raise_for_status()
        page_content = response.json()

        logging.debug(f"Page content received from Notion: {page_content}")

        markdown_content = ""
        for block in page_content['results']:
            markdown_content += block_to_markdown(block)

        return JsonResponse({'markdown': markdown_content, 'json': page_content}, status=200)
    except requests.RequestException as e:
        logging.error(f"Error occurred: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)
