import csv
from blog.models import BlogPost

class Command():
    help = 'Import blog posts from a CSV file'

    def add_arguments(self, parser):
        """
            Add logic to add argument for passing the csv file
        """

    def handle(self, *args, **kwargs):
        """
            populate the database with the same data from data/blog_post.csv
            Style the output so that errors are shown in red and a successfull import is in green.
        """

        