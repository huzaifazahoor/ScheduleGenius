from django.urls import path
from .views import chat_gpt_api

urlpatterns = [
    path('', chat_gpt_api, name='chat_gpt_api'),
]
