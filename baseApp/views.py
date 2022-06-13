from django.shortcuts import render
from django.template.loader import render_to_string, get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings
from django.core.mail import send_mail
from django.contrib import messages
# Create your views here.

def index(request):

    if request.method == "POST":
            name = request.POST['lastname']
            mobile = request.POST['mobile']
            email = request.POST['email']
            message = request.POST['description']
            send_mail(
                subject=name,
                message=message,
                from_email=email,
                recipient_list=['hamzasarwar129@gmail.com', 'saifnoor129@gmail.com']
            )
            messages.success(request, 'Successfully Sent The Message!')
    return render(request, 'index.html')


def store_management(request):

    return render(request, 'store-management.html')


def about_us(request):

    return render(request, 'about-us.html')

def clients(request):

    return render(request, 'clients.html')

def contact_us(request):

    if request.method == "POST":
            name = request.POST['lastname']
            mobile = request.POST['mobile']
            email = request.POST['email']
            message = request.POST['description']
            send_mail(
                subject=name,
                message=message,
                from_email=email,
                recipient_list=['hamzasarwar129@gmail.com', 'saifnoor129@gmail.com']
            )
            messages.success(request, 'Successfully Sent The Message!')

    return render(request, 'contact-us.html')

def social_media_management(request):

    return render(request, 'social-media-management.html')

def virtual_assistant(request):

    return render(request, 'virtual-assistant.html')

def customer_support(request):

    return render(request, 'customer-support.html')

def graphic_designing(request):

    return render(request, 'graphic-designing.html')

def food_delivery(request):

    return render(request, 'food-delivery-dispatching.html')

def photo_manipulation(request):

    return render(request, 'photo-manipulation.html')

def discord_server(request):

    return render(request, 'discord-server.html')

def dispute_resolution(request):

    return render(request, 'dispute-resolution.html')