"""
test_app.py
Tests for the Flask application's routes.
"""

def test_home_route(client):
    """
    Test the home route of the Flask application.
    
    Args:
        client: Flask test client fixture.
    """
    response = client.get('/')
    assert response.status_code == 200
    assert b"Welcome to the Forks n' Filters Backend!" in response.data
    