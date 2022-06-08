from django.shortcuts import render
from django.http import Http404, JsonResponse
from .models import Category, Product,UserRegister
from rest_framework import generics
from .Serilaizer import CategorySerializer, ProductSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login


class Category(generics.ListCreateAPIView):
    queryset=Category.objects.all()
    serializer_class=CategorySerializer


    
class HomeProduct(generics.ListCreateAPIView):
    queryset=Product.objects.all().order_by('?')[:15]
    serializer_class=ProductSerializer
class HomeProduct1(generics.ListCreateAPIView):
    queryset=Product.objects.all().order_by('?')[:15]
    serializer_class=ProductSerializer
class HomeProduct2(generics.ListCreateAPIView):
    queryset=Product.objects.all().order_by('price')[:15]
    serializer_class=ProductSerializer


    
class ProductView(APIView):
    def get_object(self, pk):
        return Product.objects.filter(category_id=pk)
      

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = ProductSerializer(snippet,many=True)
        return Response(serializer.data)


class ProductDetailView(APIView):
    def get_object(self, pk,cid):
        return Product.objects.filter(category_id=cid).get(id=pk)
      

    def get(self, request, pk,cid, format=None):
        snippet = self.get_object(pk,cid)
        serializer = ProductSerializer(snippet)
        return Response(serializer.data)


class RegisterView(APIView):
    def post(self, request):
        name=request.POST['firstname']
        email=request.POST['email']
        password=request.POST['password']
       
        user =  User.objects.create_user(name, email , password) 
        user.first_name=''
        user.last_name=''       
        user.save()
        if user:
            return JsonResponse({'bool':True})
        else:
            return JsonResponse({'bool':False})




class LoginView(APIView):
    def post(self, request):
        email=request.POST['email']
        password=request.POST['password']
        print(email, password)
        user =  authenticate(email=email ,password=password)
        if user is not None:
            return JsonResponse({"bool":True})
        else:
            return JsonResponse({"bool":False})

