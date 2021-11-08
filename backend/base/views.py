from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Case, Status
from .serializers import CaseSerializer

# Create your views here.


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/cases/new',
        '/api/cases/old'
    ]
    return Response(routes)


@api_view(['GET'])
def getNewCases(request):
    status = Status.objects.get(pk=3)
    case_data = Case.objects.all()
    case_data = case_data.exclude(status_id=status)
    serializer = CaseSerializer(case_data, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getOldCases(request):
    status = Status.objects.get(pk=3)
    case_data = Case.objects.all()
    case_data = case_data.filter(status_id=status)
    serializer = CaseSerializer(case_data, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def createNewCases(request):
    serializer = CaseSerializer(Case, data=request.data, many=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
