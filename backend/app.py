from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# Spoonacular API Key
API_KEY = "2ee6f5c8de0c49d1a27f0bd7f96ed7b8"

@app.route('/recipes', methods=['GET'])
def get_recipes():
    # Extract user filters from query parameters
    filters = {
        "diet": request.args.get("diet"),
        "includeIngredients": request.args.get("includeIngredients"),
        "excludeIngredients": request.args.get("excludeIngredients"),
        "cuisine": request.args.get("cuisine"),
        "maxReadyTime": request.args.get("maxReadyTime"),
        "maxCalories": request.args.get("maxCalories"),
        "minProtein": request.args.get("minProtein"),
        "apiKey": API_KEY,
    }
    
    # Remove None values from the filters
    params = {k: v for k, v in filters.items() if v}

    # Spoonacular API Request
    url = "https://api.spoonacular.com/recipes/complexSearch"
    response = requests.get(url, params=params)

    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({"error": response.text}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
