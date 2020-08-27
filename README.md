# Movie Flex
[Demo of Movie Flex](https://yog9.github.io/Movie-Flex/)


![](/src/images/MovieFlex.png)

### Summary

Movie Flex is a movie application created with React/Redux in which users can browse Movies and TV shows from TMDB API to find more information about them. Also provided a search functionality for searching movies/TV shows.

### Motivation
The purpose of this project was to get familiar with the basics of Redux.

### Getting Started
Click the demo link or clone/download the repository on your local machine.
Create a config folder inside the src folder. Inside config create a config.js file add the following code snippet.

`export const url_movie = 'https://api.themoviedb.org/3/movie';`

`export const API_KEY = 'YOUR_TMDB_API_KEY';`

`export const url = "https://api.themoviedb.org/3";`

`export const url_tv = 'https://api.themoviedb.org/3/tv';`

##### Install dependencies
`npm install`

##### Run Movie-Flex from the root directory.
`npm start`

### Built With
* React
* React Router
* Redux
* CSS 3

### Features

**1. Responsive Design**

**2. Watch trailer and a lot more details of each movie or TV Show.**

**3. Search movies and TV Shows.**

### Coming Soon 
- [ ] Add watchlist functionality using Mongo DB as the database.
- [ ] Login functionality with Mongo DB as the database.
- [ ] Code refactoring with TypeScript/React.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
