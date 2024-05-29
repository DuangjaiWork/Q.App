from rest_framework import serializers
from .models import Post
from .models import Locate

class PostSerializer(serializers.ModelSerializer):
   class Meta:
       fields = (
           'id',
           'name',
           'description',
           'image',
       )
       model = Post

class LocateSerializer(serializers.ModelSerializer):
   class Meta:
       fields = ( 'id', 'created_at', 'updated_at', 'user_id','latitude', 'longitude' )
       model = Locate

