from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cases/new', views.getNewCases, name="newcases"),
    path('cases/old', views.getOldCases, name="newcases"),
]
