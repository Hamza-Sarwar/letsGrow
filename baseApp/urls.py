"""LetsGrow URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('', views.index),
    path('store-management.html', views.store_management),
    path('about-us.html', views.about_us),
    path('clients.html', views.clients),
    path('contact-us.html', views.contact_us),
    path('social-media-management.html', views.social_media_management),
    path('virtual-assistant.html', views.virtual_assistant),
    path('customer-support.html', views.customer_support),
    path('graphic-designing.html', views.graphic_designing),
    path('food-delivery-dispatching.html', views.food_delivery),
    path('photo-manipulation.html', views.photo_manipulation),
    path('discord-server.html', views.discord_server),
    path('dispute-resolution.html', views.dispute_resolution),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
