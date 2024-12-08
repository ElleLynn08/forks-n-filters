"""
Handles all recipe-related routes for the application.

This module defines the routes for interacting with the Spoonacular API,
allowing users to search for recipes based on various filters like diet,
ingredients, cuisine, and nutritional preferences.
"""

import os
from flask import Blueprint, request, jsonify
import requests
from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()

# Spoonacular API Key loaded from the .env file
API_KEY = os.getenv("SPOONACULAR_API_KEY")

# Blueprint for recipe-related routes
recipe_blueprint = Blueprint("recipe_routes", __name__)

@recipe_blueprint.route('/recipes', methods=['GET'])
def get_recipes():
    """
    Fetch recipes from the Spoonacular API based on user-provided filters.

    This endpoint allows users to filter recipes using various query parameters 
    such as diet preferences, ingredients to include or exclude, cuisine types, 
    and nutritional information.

    Query Parameters:
        diet (str): Specifies a diet type (e.g., 'keto', 'vegetarian', etc.).
        includeIngredients (str): Ingredients to include in the recipe search, comma-separated.
        excludeIngredients (str): Ingredients to exclude from the recipes, comma-separated.
        cuisine (str): Specifies the cuisine type (e.g., 'Italian', 'Mexican').
        maxReadyTime (int): The maximum preparation time in minutes.
        maxCalories (int): Maximum calories per serving.
        minProtein (int): Minimum protein (in grams) per serving.

    Returns:
        Response (JSON): A JSON object with the list of recipes that match the filters.
        On error: Returns an error message with the status code.

    Example Request:
        /recipes?diet=keto&includeIngredients=chicken,spinach&maxReadyTime=30

    Example Response (200):
        {
            "results": [
                {
                    "id": 12345,
                    "title": "Chicken Spinach Salad",
                    "image": "http://example.com/recipe-image.jpg",
                }
            ],
            "offset": 0,
            "number": 10,
            "totalResults": 125
        }

    Error Response (504 - Timeout):
        {
            "error": "The request to Spoonacular API timed out. Please try again later."
        }
    """
    # Extract user-provided filters from query parameters
    filters = {
        "diet": request.args.get("diet"),
        "includeIngredients": request.args.get("includeIngredients"),
        "excludeIngredients": request.args.get("excludeIngredients"),
        "cuisine": request.args.get("cuisine"),
        "maxReadyTime": request.args.get("maxReadyTime"),
        "maxCalories": request.args.get("maxCalories"),
        "minProtein": request.args.get("minProtein"),
        "apiKey": API_KEY,  # Always include the API key
    }

    # Clean up the filters dictionary by removing any keys with `None` values
    params = {k: v for k, v in filters.items() if v}

    # Spoonacular API endpoint for recipe search
    url = "https://api.spoonacular.com/recipes/complexSearch"

    try:
        # Send the GET request with a timeout to avoid hanging the application
        response = requests.get(url, params=params, timeout=5)  # Timeout set to 5 seconds

        if response.status_code == 200:
            # Success! Return the JSON response from Spoonacular.
            return jsonify(response.json())
        else:
            # Spoonacular API returned an error
            return jsonify({"error": response.text}), response.status_code

    except requests.exceptions.Timeout:
        # Handle timeout errors gracefully
        return jsonify({"error": "The request to Spoonacular API timed out. "
                         "Please try again later."}), 504


    except requests.exceptions.RequestException as e:
        # Handle any other request-related errors
        return jsonify({"error": str(e)}), 500
