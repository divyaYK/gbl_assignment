from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class ReportingMethodSerializer(serializers.Serializer):
    class Meta:
        model = ReportingMethod
        fields = ['name']


class StatusSerializer(serializers.Serializer):
    class Meta:
        model = Status
        fields = 'name'


class NatureSerializer(serializers.Serializer):
    class Meta:
        model = Nature
        fields = 'name'


class PrioritySerializer(serializers.Serializer):
    class Meta:
        model = Priority
        fields = 'name'


class CategorySerializer(serializers.Serializer):
    class Meta:
        model = Category
        fields = 'name'


class SubcategorySerializer(serializers.Serializer):
    class Meta:
        model = Subcategory
        fields = 'name'


class ManagerSerializer(serializers.Serializer):
    class Meta:
        model = Manager
        fields = 'name'


class ReporterSerializer(serializers.Serializer):
    class Meta:
        model = Reporter
        fields = 'name'


class CaseSerializer(serializers.ModelSerializer):
    branch_id = serializers.StringRelatedField(read_only=True)
    reporting_method = serializers.StringRelatedField(read_only=True)
    status_id = serializers.StringRelatedField(read_only=True)
    nature_id = serializers.StringRelatedField(read_only=True)
    priority_id = serializers.StringRelatedField(read_only=True)
    category_id = serializers.StringRelatedField(read_only=True)
    subcategory_id = serializers.StringRelatedField(read_only=True)
    manager_id = serializers.StringRelatedField(read_only=True)
    reporter_id = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = Case
        fields = ['id', 'date', 'time', 'branch_id', 'reporting_method', 'status_id',
                  'nature_id', 'priority_id', 'category_id', 'subcategory_id', 'manager_id', 'reporter_id']
