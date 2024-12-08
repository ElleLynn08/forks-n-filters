"""
Main entry point for the Flask application.

This file sets up the Flask app, registers all necessary Blueprints, 
and starts the development server when executed.
"""

from flask import Flask
from routes.recipe_routes import recipe_blueprint

# Initialize the Flask app
app = Flask(__name__)

# Register the Blueprint for recipe routes
app.register_blueprint(recipe_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
