from django.urls import path
from . import views
urlpatterns = [
    path('category/',views.Category.as_view()),
    # individual product
    path('product/',views.HomeProduct.as_view()),
    path('product1/',views.HomeProduct1.as_view()),
    path('product2/',views.HomeProduct2.as_view()),
    #for each category
    path('product/<int:pk>/',views.ProductView.as_view()),

    # product from category
    path('product/<int:pk>/<int:cid>',views.ProductDetailView.as_view()),
    # for authentication 
    path('register/',views.RegisterView.as_view()),
    path('login/',views.LoginView.as_view()),
]
