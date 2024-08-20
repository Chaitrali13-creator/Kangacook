import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

function App() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({ name: '', ingredients: '', instructions: '' });
  const [searchQuery, setSearchQuery] = useState(''); 

  // Function to fetch all recipes
  const fetchAllRecipes = () => {
    axios.get('http://localhost:8000/api/recipes/')
      .then(response => setRecipes(response.data))
      .catch(error => console.error('Error fetching recipes:', error));
  };

  useEffect(() => {
    fetchAllRecipes();
  }, []);

  const handleChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/recipes/', newRecipe)
      .then(response => {
        setRecipes([...recipes, response.data]);
        setNewRecipe({ name: '', ingredients: '', instructions: '' });
      })
      .catch(error => console.error('Error submitting recipe:', error));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value === '') {
      fetchAllRecipes();
    } else {
      
      axios.get(`http://localhost:8000/api/recipes/search/?ingredients=${e.target.value}`)
        .then(response => setRecipes(response.data))
        .catch(error => console.error('Error searching recipes:', error));
    }
  };

  return (
    <div className="container">
      <h1 className="title">Kangacook Recipe Sharing</h1>

      <form className="recipe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Name:</label>
          <input type="text" name="name" value={newRecipe.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <textarea name="ingredients" value={newRecipe.ingredients} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Instructions:</label>
          <textarea name="instructions" value={newRecipe.instructions} onChange={handleChange} required />
        </div>
        <button className="submit-btn" type="submit">Submit Recipe</button>
      </form>

      <div className="search-form">
        <div className="form-group">
          <label>Search by Ingredients:</label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Enter ingredients separated by commas"
          />
        </div>
      </div>

      <h2 className="subtitle">Submitted Recipes</h2>
      <ul className="recipe-list">
        {recipes.map((recipe, index) => (
          <li key={index} className="recipe-item">
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
