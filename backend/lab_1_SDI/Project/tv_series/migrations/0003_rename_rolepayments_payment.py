# Generated by Django 4.1.7 on 2023-03-21 13:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("tv_series", "0002_rolepayments"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="RolePayments",
            new_name="Payment",
        ),
    ]
