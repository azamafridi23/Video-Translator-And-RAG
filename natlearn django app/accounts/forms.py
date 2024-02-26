
from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User, Video, Translation


class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm.Meta):
        model = User
        fields = ['name', 'email', 'password1', 'password2']

class VideoForm(forms.ModelForm):
    class Meta:
        model = Video
        fields = ['title', 'uv','source_lang','target_lang','voice_type'  ] #ed by azam

class TranslationForm(forms.ModelForm):
    class Meta:
        model = Translation
        fields = ['title', 'tv'] 
