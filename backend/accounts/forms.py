from django.forms import ModelForm
from django import forms
from .models import User



class UserLoginForm(forms.Form):
    """
     a form for login user
    """
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput) 


class UserCreationForm(ModelForm):
    """
    A form for creating new users. Includes all the required fields, plus a repeated password.
    """
    password1 = forms.CharField(label='Password', widget=forms.PasswordInput)
    password2 = forms.CharField(label='Password confirmation', widget=forms.PasswordInput)
    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name']
    def clean_password2(self):
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")

        if not password1 or not password2:
            raise forms.ValidationError("Password fields cannot be empty.")
        if password1 != password2:
            raise forms.ValidationError("The two password fields didn't match.")

        return password2
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user