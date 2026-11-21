from django.urls import path, include
from .views import ProjectView


urlpatterns = [
    path('', ProjectView.as_view(), name='project'),
]
