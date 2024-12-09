"""
test_app.py
Unit tests for the Flask application's routes.
"""

import pytest
from backend.app import app
from backend.routes.recipe_routes import recipe_blueprint

@pytest.fixture
def client():
    """
    Pytest fixture to provide a Flask test client.

    Yields:
        client: Flask test client instance.
    """
    with app.test_client() as client:
        yield client


def test_home_route(client):
    """
    Test the home route of the Flask application.

    Args:
        client: Flask test client fixture.
    """
    response = client.get('/')  # Send a GET request to the home route
    assert response.status_code == 200  # Verify response status is 200
    assert b"Welcome to the Forks n' Filters Backend!" in response.data  # Verify response contains welcome message
