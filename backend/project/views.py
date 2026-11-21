from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView, CreateView, FormView


# Create your views here.


class ProjectView(TemplateView):
    """
    A class for project view
    """
    template_name = 'project/project.html'