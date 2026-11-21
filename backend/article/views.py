from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView, CreateView, FormView
# Create your views here.



class ArticleView(TemplateView):
    """
    A class for profile view
    """
    template_name = 'article/article.html'


