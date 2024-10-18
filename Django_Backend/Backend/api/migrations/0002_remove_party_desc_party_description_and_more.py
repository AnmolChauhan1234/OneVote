# Generated by Django 5.1 on 2024-10-17 13:49

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='party',
            name='desc',
        ),
        migrations.AddField(
            model_name='party',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='contact',
            name='queries',
            field=models.TextField(default=''),
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_voted', models.BooleanField(default=False)),
                ('voted_at', models.DateTimeField(blank=True, null=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]