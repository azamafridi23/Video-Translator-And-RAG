from django.urls import path
from . import views
from .views import ChatbotView, CombinedView
from django.http import HttpResponse
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve


urlpatterns = [
    path('', views.home, name='home'),
    path('register/', views.user_register, name='register'),
    path('login/', views.user_login, name='login'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('translation/', views.translation, name='translation'),
    path('translation/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
    path('chatbot/', ChatbotView.as_view(), name='chatbot'),
    path('combined/', CombinedView.as_view(), name='combined_view'),
    path('combined/<path:path>', serve, {'document_root': settings.MEDIA_ROOT}),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
