from django import forms
import re
from .models import *
from django.core import validators
from django.forms import ModelForm

class ProfDescriptionForm(ModelForm):
    class Meta:
        model = Description
        fields = ['description_content', 'description_image']
