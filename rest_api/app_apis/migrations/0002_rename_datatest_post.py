# Generated by Django 5.0.4 on 2024-05-29 02:20

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("app_apis", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="DataTest",
            new_name="Post",
        ),
    ]
