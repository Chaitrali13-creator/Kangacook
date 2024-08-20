from django.urls import path
from .views import RecipeListCreate

urlpatterns = [
    path('recipes/', RecipeListCreate.as_view(), name='recipe-list-create'),
]
