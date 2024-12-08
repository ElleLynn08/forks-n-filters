"""
Main entry point for the Flask application.

This file sets up the Flask app, registers all necessary Blueprints, 
and starts the development server when executed.
"""

from flask import Flask
from routes.recipe_routes import recipe_blueprint

# Create a Flask app instance
app = Flask(__name__)

# Register the Blueprint for the recipe routes
app.register_blueprint(recipe_blueprint)

if __name__ == '__main__':
    # Start the Flask development server
    # Debug mode is enabled to auto-reload the server on code changes
    app.run(debug=True)
