#!/bin/bash

# Navigate to the Django project directory
cd /app

# Run the migrations
python manage.py makemigrations
python manage.py migrate

# Execute CMD command
exec "$@"
