from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    country = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
