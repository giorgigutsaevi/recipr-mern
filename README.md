# RECIPR APP - MERN

# About the Project
This is my Recipe app that allows users to store their favourite recipes.\
This app is created entirely with a MERN stack: MongoDB, Express.js, React.js and Node.js for the backend.

## Project Overview
- Visiting users can sign up, log in and log out. 
- All routes are protected with middleware, so unregistered users can't view recipes
- Authorized or logged in users generate a JWT token. The token is then stored as a httpOnly cookie and preserved throughout the app, as long as the user is NOT logged out. 
- Authorized users can then perform CRUD operations with the recipe. Meaning, they can create, read, update and delete recipes. 

## Getting started locally

### Prerequisities
- [node](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)

### Installation

1. Make sure preqrequisites are installed
2. Clone the repo
3. cd into the directory
4. Install NPM packages
```
npm install
```
5. Run client-side React with:
```
npm start
```
6. Run the local server
```
nodemon server.js
```
7. Visit the locally hosted application
```
http://localhost:5001/
```
### What you should see 👉 A homepage
![homepage](https://i.imgur.com/Xo3Ha1J.png)

## App Usage

### Sign Up Page

![signup](https://i.imgur.com/0NHWjWt.png)
🎯 Enter your *username*, *email* and *password* to create your ✨Account✨\
🎯 Once the account is created, you will be redirected to a Homepage/Dashboard\

### Dashboard 

![dashboard](https://i.imgur.com/8NCbzxv.png)

#### Dashboard displays the following components:
##### Navbar Component 
- navbar conditionally renders elements whether the user is **signed in** or **logged out**. This is achieved by creating a Context that maintains the user's authorization state throughout the app (a boolean value).
##### Welcome Component 
- Displays the greeting, depending on the time of the day -> I used a useTime custom hook to calculate what time of the day it is.
- Username - Once the user signs up or logs in, a JWT token is created which carries user's email, unique MongoDB _id and the username. I also created UserContext that retrieves the unique JWT token, decodes user's information and that information is then rendered out.
- Current date -> Using the useTime custom hook
- Current time -> Using the useTime custom hook
- Current temperature in celcius -> With express, I set up a simple axios call on the Openweathermap.com API, that gives me the current temperature for London
##### RecipeList component
- The app will render a custom message if there are no recipes yet.

### Login Page

 ![login](https://i.imgur.com/esEiQlT.png)

- If the user logs out from the dashboard, they will be navigated to the Login Page


### Signed up user with recipes

- If the user has already signed up and added recipes, the app will look like this👇
![recipes](https://i.imgur.com/8R7pjzs.png)

Thanks and hope you enjoy the app!