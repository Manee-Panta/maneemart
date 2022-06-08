from rest_framework import serializers
from .models import Category, Product
from django.contrib.auth.models import User
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields=['id','name']


        
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields=['pk','category','pname','price','des','image' ]


# class RegisterSerializer(serializers.ModelSerializer):
  
#     class Meta:
#         model = User
#         fields = ['username', 'password', 'email']