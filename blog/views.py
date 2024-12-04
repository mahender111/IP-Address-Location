from re import search
from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import BlogPost
from django.contrib import messages
from .forms import BlogPostUploadForm
from .utils import get_user_country
import csv
import requests
import ipapi

def index(request):
    country = get_user_country(request=request)
    print('1------',country)
    posts = BlogPost.objects.all()
    filtered_posts = posts.filter(country=country)

    return render(request, 'country_select.html', {
        'posts': posts,
        'filtered_posts': filtered_posts,
        'country': country,
    })

def ip_location(request):
    data = None
    if request.method == "POST":
        search = request.POST.get('search')
        if search:
            data = ipapi.location(ip=search, output='json')
    context = {"data": data}
    return render(request, 'ip_locations.html', context)


def get_user_ip(request):
    ip_address = request.META.get('HTTP_X_FORWARDED_FOR')
    if ip_address:
        ip_address = ip_address.split(',')[0]
        print('ip_address------',ip_address)
    else:
        ip_address = request.META.get('REMOTE_ADDR')
        print('ip_address---22222---',ip_address)
    return HttpResponse(f'Your IP address is: {ip_address}')


def post_list(request):
    country = get_user_country(request=request)
    print('1------',country)
    posts = BlogPost.objects.all()
    filtered_posts = posts.filter(country=country)

    return render(request, 'post_list.html', {
        'posts': posts,
        'filtered_posts': filtered_posts,
        'country': country,
    })

def blog_list(request):
    posts = BlogPost.objects.all()
    return render(request, 'blog.html', {
        'posts': posts
    })


def post_list_Upload(request):
    if request.method == 'POST' and request.FILES['csv_file']:
        csv_file = request.FILES['csv_file']
        decoded_file = csv_file.read().decode('utf-8').splitlines()
        print('1---',decoded_file)
        reader = csv.DictReader(decoded_file)
        print('2---',reader)

        for row in reader:  
            my_model = BlogPost()
            my_model.title = row['title']
            my_model.content = row['content']
            my_model.country = row['country']
            my_model.save()

    return render(request, 'post_upload.html')


def upload_blog_posts(request):
    if request.method == 'POST':
        form = BlogPostUploadForm(request.POST, request.FILES)
        if form.is_valid():
            csv_file = request.FILES['csv_file']
            decoded_file = csv_file.read().decode('utf-8').splitlines()
            reader = csv.DictReader(decoded_file)

            for row in reader:
                title = row.get('title')
                content = row.get('content')
                country = row.get('country', '')

                if not title or not content:
                    messages.warning(request, "Skipping row with missing required fields.")
                    continue

                BlogPost.objects.update_or_create(
                    title=title,
                    defaults={'content': content, 'country': country},
                )
            messages.success(request, "Blog posts uploaded successfully!")
            return redirect('post_list_url')
    else:
        form = BlogPostUploadForm()

    return render(request, 'upload_blog_posts.html', {'form': form})



