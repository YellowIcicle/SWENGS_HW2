# Generated by Django 3.0.2 on 2020-01-08 08:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('yamod', '0010_car_test'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='car',
            name='test',
        ),
    ]
