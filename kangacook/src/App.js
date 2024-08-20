import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', instructions: '' });

  useEffect(() => {
    // Fetch recipes from the backend
    axios.get('http://localhost:8000/api/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Post new recipe to the backend
    axios.post('http://localhost:8000/api/recipes/', newRecipe)
      .then(response => {
        setRecipes([...recipes, response.data]);
        setNewRecipe({ name: '', ingredients: '', instructions: '' });
      })
      .catch(error => console.error('Error submitting recipe:', error));
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>Kangacook Recipe Sharing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe Name:</label>
          <input type="text" name="name" value={newRecipe.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea name="ingredients" value={newRecipe.ingredients} onChange={handleChange} required />
        </div>
        <div>
          <label>Instructions:</label>
          <textarea name="instructions" value={newRecipe.instructions} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Recipe</button>
      </form>
      <h2>Submitted Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
