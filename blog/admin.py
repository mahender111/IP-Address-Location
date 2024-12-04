from django.contrib import admin
from .models import BlogPost

# Register your models here.
class BlogPost_Admin(admin.ModelAdmin):
    list_display = [
        'id',
        'title',
        'content',
        'country',
        'created_at'
    ]
    list_filter =['title','content','country']
    search_fields = ['title','content','country']
    
admin.site.register(BlogPost,BlogPost_Admin)
