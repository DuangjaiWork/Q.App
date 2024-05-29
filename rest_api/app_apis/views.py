from django.shortcuts import render
from rest_framework import generics
from .models import Post
from .models import Locate
from .serializers import PostSerializer
from .serializers import LocateSerializer

class PostAll(generics.ListCreateAPIView):
   queryset = Post.objects.all()
   serializer_class = PostSerializer
  
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = Post.objects.all()
   serializer_class = PostSerializer

class LocateAll(generics.ListCreateAPIView):
   queryset = Locate.objects.all()
   serializer_class = LocateSerializer
 
class LocateDetail(generics.RetrieveUpdateDestroyAPIView):
   queryset = Locate.objects.all()
   serializer_class = LocateSerializer
