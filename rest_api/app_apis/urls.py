from django.urls import path
from . import views
urlpatterns = [
   path('post/', views.PostAll.as_view()),
   path('post/<int:pk>/', views.PostDetail.as_view()),
   path('locate/', views.LocateAll.as_view()),
   path('locate/<int:pk>/', views.LocateDetail.as_view()),
]
