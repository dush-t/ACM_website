from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.decorators import login_required, user_passes_test
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.contrib.auth import login, logout, authenticate
from django.apps import apps
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .forms import *
from .models import *
from .serializers import *
# from .permissions import *
# from .cms_field_data import *
import os
import io
import json


def index(request):
    page_url = "/api/list/description/index"
    return render(request, 'main/index.html', {'page_url': page_url})


def render_cms_portal(request):
    return render(request, 'main/cms/cms.html')

# Create your views here.


class DescriptionViewSet(viewsets.ModelViewSet):

    serializer_class = DescriptionSerializer
    # permission_classes = (DescriptionEditPerm,)

    def get_queryset(self):  # Used with list method
        page_url = self.kwargs['page_url']
        position = self.kwargs['position']
        page = Page.objects.get(page_url=page_url)
        if str(position) == "all":
            descriptions = Description.objects.filter(page=page)
        else:
            descriptions = Description.objects.filter(
                page=page, position=position)
        return descriptions

    def get_object(self):  # Used with retrieve method
        pk = int(self.kwargs['pk'])
        description = Description.objects.get(pk=pk)
        # self.check_object_permissions(self.request, description)
        return description


class BarEntryViewSet(viewsets.ModelViewSet):

    serializer_class = BarEntrySerializer
    # permission_classes = (BarEntryEditPerm,)

    def get_queryset(self):
        bar_id = self.kwargs['bar_id']
        bar_entries = BarEntry.objects.filter(bar_id=bar_id)
        return bar_entries

    def get_object(self):
        bar_id = self.kwargs['bar_id']
        content = self.kwargs['content']
        bar_entry = Bar.objects.filter(bar_id=bar_id, content=content)[0]
        self.check_object_permissions(self.request, bar_entry)
        return bar_entry


def sign_in(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        current_user = authenticate(username=username, password=password)
        if current_user:
            login(request, current_user)
            return redirect('/cms_portal')
        else:
            return JsonResponse({'error': 'invalid_credentials'})
    else:
        return render(request, 'main/cms/sign_in.html')


def get_cms_permission_data(request):
    if request.user.level == 1:
        current_prof = Professor.objects.get(user=request.user)
        moderated_pages = current_prof.pages_moderated.all()
        proftab_endpoint = "/api/proftab/" + \
            str(current_prof.page_url) + "/all"
        contact_endpoint = "/api/contact/" + str(current_prof.page_url)
        fixed_fields = [
            ['Prof-page', [['ProfTab', proftab_endpoint, ProfTab_add_fields],
                           ['Contact', contact_endpoint, Contact_add_fields]]]
        ]
    elif request.user.level == 2:
        moderated_pages = Page.objects.filter(page_campus=request.user.campus)
    else:
        moderated_pages = Page.objects.all()

    page_list = []
    for page in moderated_pages:
        if request.user.level == 1:
            if current_prof.pages_owned.filter(page_id=page.page_id).exists():
                is_owned = True
            else:
                is_owned = False
        else:
            is_owned = True

        page_id = page.page_id
        page_api_endpoint = "/api/page/" + str(page.page_url) + "/"
        page_data_list = [page_id, page_api_endpoint, is_owned]
        page_list.append(page_data_list)

    return JsonResponse({'page_list': page_list, 'fixed_fields': fixed_fields})


def get_template_classes(request, template_code):
    if template_code == 1:
        # Return list of classes
        pass
    # So on.


def render_page(request, page_url):
    page = Page.objects.get(page_url=page_url)
    html_template = page.template
    html_template_path = 'main/templates/' + html_template + '.html'
    page_url = '/api/list/description/' + page_url + '/all'
    return render(request, html_template_path, {'page_url': page_url})


def get_page_list(request):
    # you can check permissions before sending list here.
    pages = Page.objects.all()
    page_list = []
    for page in pages:
        page_list.append({
            "id": page.page_id,
            "des_endpoint": "/api/list/description/" + str(page.page_url)
        })
    return JsonResponse({"pages": page_list})


def get_page_data_list(request, key):
    page = Page.objects.get(page_id=key)
    template_code = int(page.template)
    template_classes = get_template_classes(template_code)
    return JsonResponse({"template_classes": template_classes})


def create_page(request):
    page_url = str(request.POST.get("page_url"))
    page_id = str(request.POST.get("page_id"))
    page_description = str(request.POST.get("page_description"))
    template = request.POST.get("template")

    Page.objects.create(page_url=page_url, page_id=page_id,
                        page_description=page_description, template=template)
    


# AFAIK, This is ugly but a lot more optimized
# than it's alternatives.
# def media_upload(request, upload_string):
#     params = upload_string.split(':')
#     model = apps.get_model(app_label = "main", model_name = str(params[0]))
#     model_instance = model.objects.get(pk = int(params[1]))

#     image = request.FILES.get("image")
#     model_instance.description_image = image
#     model_instance.save()
#     print(model_instance)

#     return HttpResponse(status=200)
