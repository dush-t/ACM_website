from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("sign_in", views.sign_in, name="sign_in")
]