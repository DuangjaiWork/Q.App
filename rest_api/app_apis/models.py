
from django.db import models

class Post(models.Model):
   name = models.CharField(max_length=100)
   description = models.TextField()
   image = models.CharField(max_length=254)
  
   def __str__(self):
       return self.name

class Locate(models.Model):
   created_at = models.DateTimeField('created at')
   updated_at = models.DateTimeField('updated at')
   user_id = models.CharField(max_length=100)
   latitude = models.CharField(max_length=254)
   longitude = models.CharField(max_length=254)
 
   def __str__(self):
       return self.user_id
