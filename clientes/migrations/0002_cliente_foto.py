# Generated by Django 4.2.16 on 2024-10-29 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('clientes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='foto',
            field=models.ImageField(blank=True, null=True, upload_to='clientes_fotos'),
        ),
    ]
