# Generated by Django 4.2.3 on 2023-07-19 15:02
from django.db import migrations, models


def add_dummy_data(apps, schema_editor):
    Movie = apps.get_model('todo_api', 'Movie')
    Movie.objects.create(name='Dummy Movie 1', description='Description of Dummy Movie 1')
    Movie.objects.create(name='Dummy Movie 2', description='Description of Dummy Movie 2')
    # Add more dummy data as needed


class Migration(migrations.Migration):

    dependencies = [
        ('todo_api', '0001_initial'),  # Replace '000x_previous_migration' with the last applied migration
    ]

    operations = [
        migrations.RunPython(add_dummy_data),
    ]