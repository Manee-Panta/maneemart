from django.db import models

class Category(models.Model):
    name=models.CharField(max_length=200)
    def __str__(self):
        return self.name


class Product(models.Model):
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    pname=models.CharField(max_length=200)
    price=models.IntegerField()
    des=models.TextField()
    image=models.ImageField(upload_to='product')

    def __str__(self):
        return self.pname

class UserRegister(models.Model):
    uname=models.CharField(max_length=200)
    uemail=models.EmailField(max_length=200)
    upass=models.CharField(max_length=200)
    ucpass=models.CharField(max_length=200)

    def __str__(self):
        return self.uname

