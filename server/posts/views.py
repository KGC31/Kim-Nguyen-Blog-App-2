from django.http import JsonResponse
from notion_client import Client
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

def blog_page(request, page_id):
    try:
        notion_token = os.environ.get('NOTION_TOKEN')

        logging.debug(f"NOTION_TOKEN: {notion_token}")
        logging.debug(f"Page ID: {page_id}")

        if not notion_token:
            raise ValueError("NOTION_TOKEN environment variable is not set.")

        notion = Client(auth=notion_token)
        
        logging.debug(f"Retrieving Notion page content for page_id: {page_id}")
        page = notion.pages.retrieve(page_id)
        
        logging.debug(f"Page content received from Notion: {page}")

        return JsonResponse(page, safe=False, status=200)
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)