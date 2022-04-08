# RECIPR APP - MERN

# About the Project
This is my Recipe app that allows users to store their favourite recipes.\
This app is created entirely with a MERN stack: MongoDB, Express.js, React.js and Node.js for the backend. \

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

## Usage

### Sign Up Page

![signup](https://i.imgur.com/0NHWjWt.png)
🎯 Enter your *username*, *email* and *password* to create your ✨Account✨\
🎯 Once the account is created, you will be redirected to a Homepage/Dashboard\









