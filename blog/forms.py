from django import forms

class BlogPostUploadForm(forms.Form):
    csv_file = forms.FileField()
