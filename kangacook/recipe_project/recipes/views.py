from rest_framework import generics
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer
from rest_framework.decorators import api_view

class RecipeListCreate(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

@api_view(['GET'])
def search_recipes(request):
    ingredients = request.query_params.get('ingredients', None)
    if ingredients:
        ingredients_list = ingredients.split(',')
        recipes = Recipe.objects.all()
        filtered_recipes = []
        for recipe in recipes:
            if all(ingredient.strip().lower() in recipe.ingredients.lower() for ingredient in ingredients_list):
                filtered_recipes.append(recipe)
        serializer = RecipeSerializer(filtered_recipes, many=True)
        return Response(serializer.data)
    else:
        return Response({"error": "No ingredients provided"}, status=400)
