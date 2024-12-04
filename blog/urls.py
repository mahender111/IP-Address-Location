from django.urls import path
from . import views

urlpatterns = [
    path('post_list/',views.post_list, name='post_list_url'),
    path('post_upload/',views.post_list_Upload, name='post_list_Upload_url'),
    path('upload/',views.upload_blog_posts, name='upload_blog_posts'),
    path('get_ip/', views.get_user_ip, name='get_user_ip'),
    path('ip/',views.ip_location, name='ip_location'),
    path('index/',views.index, name='index'),
    path('blog_list/',views.blog_list, name='blog_list'),

]
