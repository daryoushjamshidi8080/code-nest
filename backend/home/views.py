from django.shortcuts import render
from django.http import HttpResponse  
from django.views import View
from django.views.generic import TemplateView  
# Create your views here.


class HomeView(TemplateView):

    """
        A view that renders the home page template.
    """
    template_name = "home/home.html"

