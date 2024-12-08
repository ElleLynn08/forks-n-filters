"""
Handles all recipe-related routes for the application.

This module defines the routes for interacting with the Spoonacular API,
allowing users to search for recipes based on various filters like diet,
ingredients, cuisine, and nutritional preferences.
"""

from flask import Blueprint, request, jsonify
from services.recipe_service import fetch_recipes  # Import fetch_recipes from recipe_service

# Blueprint for recipe-related routes
recipe_blueprint = Blueprint("recipe_routes", __name__)

@recipe_blueprint.route('/recipes', methods=['GET'])
def get_recipes():
    """
    Fetch recipes from the Spoonacular API based on user-provided filters.

    This endpoint allows users to filter recipes using various query parameters 
    such as diet preferences, ingredients to include or exclude, cuisine types, 
    and nutritional information.

    Returns:
        Response (JSON): A JSON object with the list of recipes that match the filters.
    """
    # Extract query parameters from the request
    filters = {
        "diet": request.args.get("diet"),
        "includeIngredients": request.args.get("includeIngredients"),
        "excludeIngredients": request.args.get("excludeIngredients"),
        "cuisine": request.args.get("cuisine"),
        "maxReadyTime": request.args.get("maxReadyTime"),
        "maxCalories": request.args.get("maxCalories"),
        "minProtein": request.args.get("minProtein"),
    }

    try:
        # Use the service function to fetch recipes
        recipes, status_code = fetch_recipes(filters)
        return jsonify(recipes), status_code
    except Exception as e:
        # Handle any unexpected errors
        return jsonify({"error": str(e)}), 500
