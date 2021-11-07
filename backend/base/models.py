from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Branch(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=50, null=True, blank=True)
    location = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class ReportingMethod(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.name


class Category(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.name


class Subcategory(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.name


class Nature(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.name


class Priority(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.name


class Status(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)

    def __str__(self):
        return self.name


class Manager(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)
    branch_id = models.ForeignKey(Branch, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Reporter(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=15, null=True, blank=True)
    branch_id = models.ForeignKey(Branch, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Case(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    branch_id = models.ForeignKey(
        Branch, on_delete=models.CASCADE, null=True)
    reporting_method = models.ForeignKey(
        ReportingMethod, on_delete=models.SET_NULL, null=True)
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    category_id = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True)
    subcategory_id = models.ForeignKey(
        Subcategory, on_delete=models.SET_NULL, null=True)
    priority_id = models.ForeignKey(
        Priority, on_delete=models.SET_NULL, null=True)
    nature_id = models.ForeignKey(Nature, on_delete=models.SET_NULL, null=True)
    manager_id = models.ForeignKey(
        Manager, on_delete=models.SET_NULL, null=True)
    reporter_id = models.ForeignKey(
        Reporter, on_delete=models.SET_NULL, null=True)
    status_id = models.ForeignKey(Status, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return 'Case #' + str(self.id)
