"""
Service layer between Flask routes and the Spoonacular API.

This module handles business logic such as constructing API requests, 
validating parameters, and processing Spoonacular API responses.
"""

import os
import requests
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Spoonacular API Key
API_KEY = os.getenv("SPOONACULAR_API_KEY")

def fetch_recipes(filters, timeout=5):
    """
    Fetch recipes from the Spoonacular API based on the given filters.

    Args:
        filters (dict): A dictionary containing query parameters for the API.
        timeout (int, optional): The timeout value for the API request. Defaults to 5 seconds.

    Returns:
        dict: JSON response from the Spoonacular API.
        int: HTTP status code from the Spoonacular API.

    Raises:
        requests.exceptions.Timeout: If the request exceeds the specified timeout.
        requests.exceptions.RequestException: For any other request-related errors.
    """
    url = "https://api.spoonacular.com/recipes/complexSearch"
    filters["apiKey"] = API_KEY  # Add API key to filters

    # Clean up the filters dictionary by removing None values
    params = {k: v for k, v in filters.items() if v}

    # Make the API request
    response = requests.get(url, params=params, timeout=timeout)

    return response.json(), response.status_code
