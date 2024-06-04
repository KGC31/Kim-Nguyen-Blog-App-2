#!/bin/sh

python manage.py makemigrations
python manage.py migrate --no-input

gunicorn backend.wgsi:application --bind 0.0.0.0:8000