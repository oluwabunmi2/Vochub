# Vocational Training Hub (VocHub)
A Platform to address Youth Unemployment through Vocational Training
VocHub is a web-based platform aimed at reducing youth unemployment by providing access to vocational training courses. 
This platform enables users to learn various skills, such as baking, bag making, digital skills, resing craft, and tailoring while providing them with opportunities to network and access entry-level job opportunities.

# Features
User authentication and authorization (signup, login, password reset).
Course management for different vocational skills.
Content management for course materials (videos, documents).
Profile management and user dashboards.

# Getting Started
To get a local copy up and running, 
 Make sure you have the following installed:
 - Node.js
 - MongoDB
 - Git

# Installation
 Clone the repository:
 git clone https://github.com/oluwabunmi2/vochub.git
 cd vochub
 Install dependencies for both frontend and backend:
 - Navigate to the backend folder and install dependencies
   cd backend
   npm install
 - Navigate to the frontend folder and install dependencies
   cd ../frontend
   npm install

# Running the Project
 - Start the Backend Server;
   cd backend
   npm start
The backend server will be running at http://localhost:5000.
 - Start the Frontend Application;
   cd frontend
   npm start
The frontend application will be running at http://localhost:3000.

# Testing
cd backend
npm test

# Deployment Plan
- Log in to Heroku:  heroku login
- Create a new Heroku app: heroku create voc-hub
- Navigate to the backend directory and initialize it as a Heroku project: git init
 heroku git:remote -a voc-hub
- Push the backend code to Heroku: git add .
  git commit -m "Initial Heroku Deployment"
  git push heroku main
  - Set the environment variables on Heroku: heroku config:set MONGO_URI=<Your 
  MongoDB Atlas URI>
  - Open the deployed Heroku app: heroku open

# Contributing
Contributions are welcome! Please fork the repository and create a pull request to contribute. Ensure that you follow the coding standards and include tests for your changes.
