from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView, CreateView, FormView
# Create your views here.



class DashboardView(TemplateView):
    """
    A class for profile view
    """
    template_name = 'dashboard/dashboard.html'