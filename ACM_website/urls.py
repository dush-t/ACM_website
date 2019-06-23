"""ACM_website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from main import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),

    path("api/retrieve/description/<int:pk>",
        views.DescriptionViewSet.as_view(
            actions={
                'get': 'retrieve',
                'put': 'update',
                'delete': 'destroy'
            }
        )
    ),

    path("api/list/description/<str:page_url>/<str:position>",
        views.DescriptionViewSet.as_view(
            actions={
                'get': 'list',
                'post': 'create'
            }
        )
    ),

    path('media_upload/<str:upload_string>',
        views.media_upload,
        name="media_upload"
    ),

    path("api/get_cms_permission_data",
        views.get_cms_permission_data,
        name="get_cms_permission_data"
    ),

    path("api/get_page_list",
        views.get_page_list,
        name="get_page_list")

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)