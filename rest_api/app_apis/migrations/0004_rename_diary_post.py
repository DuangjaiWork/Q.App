# Generated by Django 5.0.4 on 2024-05-29 02:30

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("app_apis", "0003_rename_post_diary"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Diary",
            new_name="Post",
        ),
    ]
