# Generated by Django 3.2.9 on 2021-11-07 19:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_case_branch_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='case',
            name='branch_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.branch'),
        ),
    ]
