from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('cases/new', views.getNewCases, name="newcases"),
    path('cases/old', views.getOldCases, name="oldcases"),
    path('cases/upload', views.createNewCases, name="uploadcases"),
]
