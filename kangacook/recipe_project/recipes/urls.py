from django.urls import path
from .views import RecipeListCreate, search_recipes

urlpatterns = [
    path('recipes/', RecipeListCreate.as_view(), name='recipe-list-create'),
    path('recipes/search/', search_recipes, name='recipe-search'),
]
