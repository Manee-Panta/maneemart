from django.contrib import admin


from .models import Category, Product, UserRegister
class CategoryAdmin(admin.ModelAdmin):
    list_display=['pk','name']

admin.site.register(Category,CategoryAdmin)



class ProductAdmin(admin.ModelAdmin):
    list_display=['pk','category_id','pname','des','price','image']

admin.site.register(Product,ProductAdmin)


class UserRegisterAdmin(admin.ModelAdmin):
    list_display=['pk','uname','uemail','upass','ucpass']

admin.site.register(UserRegister ,UserRegisterAdmin )
