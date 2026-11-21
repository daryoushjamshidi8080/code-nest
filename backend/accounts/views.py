from django.shortcuts import render
from django.views import View
from django.views.generic import TemplateView, CreateView, FormView
from .forms import UserLoginForm, UserCreationForm
from .models import User
from django.urls import reverse_lazy
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
# Create your views here.



class LoginView(FormView):
    """
    A class for login users 
    """
    template_name = 'accounts/login.html'
    form_class = UserLoginForm
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        email = form.cleaned_data.get('email')
        password = form.cleaned_data.get('password')
        user = authenticate(
            self.request,
            username = email,
            password = password
        )

        if user is not None:
            login(self.request, user)
            messages.success(self.request, 'You have successfully logged in.')
            return super().form_valid(form)

        
        form.add_error(None, 'Invalid email or password')
        return super().form_invalid(form)
    
    def get(self, request, *args, **kwargs):
        print('Login page openedP: ',request.POST.get('first_name'))
        return super().get(request, *args, **kwargs)


class RegisterView(FormView):
    '''
    a class display register template
    '''
    template_name = 'accounts/register.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('home')

    def form_valid(self, form):
        user = form.save()
        print("User Valid :", user)

        login(self.request, user) # login auto before sign up

        return super().form_valid(form)
    
    def form_invalid(self, form):
        print("User invalid Error: ", form.errors)
        return super().form_invalid(form)




class LogoutView(View):
    """
    A class for logout users 
    """
    def get(self, request):
        logout(request)
        return render(request, 'home/home.html')
