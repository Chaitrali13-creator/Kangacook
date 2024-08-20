# Kangacook
This is a take-home assessment for Roulettech. 

# Kangacook Recipe Sharing

Kangacook Recipe Sharing is a web application that allows users to share and search for recipes based on ingredients. The application is built using Django for the backend and React for the frontend, with a RESTful API to handle data communication between the two.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- **Add New Recipes:** Users can submit recipes with details such as name, ingredients, and instructions.
- **Search Recipes by Ingredients:** Users can search for recipes by entering ingredients. The application dynamically filters recipes based on the input.
- **View Submitted Recipes:** All submitted recipes are displayed in a list format, showing the name, ingredients, and instructions.

## Technologies Used

- **Frontend:**
  - React
  - Axios (for HTTP requests)
  - CSS (for styling)

- **Backend:**
  - Django
  - Django REST Framework
  - SQLite (default database for development)
  - CORS Headers (for handling cross-origin requests)

- **Tools:**
  - Node.js and npm (for managing frontend dependencies)
  - Git (for version control)

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Python 3.x
- Node.js (with npm)
- Git

### Backend Setup

1. **Clone the repository:**
   git clone https://github.com/Chaitrali13-creator/Kangacook.git

### Steps to Run the Kangacook Recipe Sharing Project

1. **Navigate to the Project Directory:**
  First, open your terminal and navigate to the location where the project is cloned:
  
  cd /path/to/cloned/repository
  Replace /path/to/cloned/repository with the actual path where your project repository is cloned.

2. **Navigate to the recipe_project Folder:**
  Once you're in the cloned repository, navigate to the recipe_project directory:
  
  cd Kangacook/recipe_project

3. **Run the Django Backend Server:**
  Now, to start the Django backend server, execute the following command:
  
  python manage.py runserver
  This command will start the Django development server, and you can access the application at http://127.0.0.1:8000/ or http://localhost:8000/ in your browser.

4. **Navigate to the Frontend Folder:**
  Open a new terminal tab or window, and navigate to the Kangacook directory to set up and run the frontend:
  
  cd /path/to/cloned/repository/Kangacook

5. **Install Frontend Dependencies:**  
  Before running the frontend, ensure all necessary dependencies are installed:

  npm install

7. **Start the React Frontend:**
  Once the dependencies are installed, start the React development server:

  npm start
