# Use Python 3.11 as the base image
FROM python:3.11

# Set the working directory in the container
WORKDIR /app

# Set the PYTHONPATH environment variable
ENV PYTHONPATH=/app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the backend port
EXPOSE 5000

# Set the default command for the container to run the Flask app
CMD ["flask", "run", "--host=0.0.0.0"]












