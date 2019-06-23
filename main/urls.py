from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("sign_in", views.sign_in, name="sign_in"),
    path("cms_portal", views.render_cms_portal),
    path("page/<str:page_url>", views.render_page)
]