"""
Main entry point for the Flask application.

This file initializes the Flask application, registers all necessary Blueprints,
and provides configurations for the development server. It is designed to work
seamlessly in both local and containerized environments.
"""

from flask import Flask
from flask_cors import CORS
from routes.recipe_routes import recipe_blueprint

# Initialize the Flask application
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing (CORS) for all routes
CORS(app)

# Register the Blueprint for recipe-related routes
# Blueprint routes are modularized and imported from the `routes` directory
app.register_blueprint(recipe_blueprint)

@app.route('/', methods=['GET'])
def home():
    """
    Root endpoint to verify the Flask backend is running.

    Returns:
        str: A welcome message as plain text.
    """
    return "Welcome to the Forks n' Filters Backend!"

if __name__ == '__main__':
    # Run the Flask app in debug mode for development purposes
    # Use the 0.0.0.0 host to allow connections from Docker and external devices
    app.run(host='0.0.0.0', port=5000, debug=True)
