# Notflix

This app displays information about movies, where you can perform a custom search or search by movie genre. You can also save movies to favorites and view the movies you have previously saved. 

It has been developed with **Angular**, with **PrimeNG** as the component library. It consumes The Movie Database (TMDB) API.

## Screenshots
Homepage where you can see popular and top rated movies and search the movie you want

![Captura de pantalla (3)](https://github.com/ismaelescalante/notflix/assets/96469912/6a1a58b9-8343-47ba-9c08-1ce59b502d09)

Detail of the movie where you can see a YouTube trailer, the plot of the movie, the cast and more info. You can also save it to favorites.


![Captura de pantalla (4)](https://github.com/ismaelescalante/notflix/assets/96469912/7783ed9e-1a01-424b-bb23-c228765dbb37)

List of movie genres

![Captura de pantalla (5)](https://github.com/ismaelescalante/notflix/assets/96469912/75578895-1c03-4710-af2c-6015b8a2e9ce)

Favorites view 

![Captura de pantalla (6)](https://github.com/ismaelescalante/notflix/assets/96469912/462ba711-7824-4c96-8b83-970ca9c03f2d)

## Environment variables
You will need to create an environment.ts file and add the following: 
```
export const environments = {
    API_KEY: // Your personal API KEY from The Movie Database
}
```



## Installation

Run <code>npm install</code> on the root folder to install all dependencies.<br>

Run <code>npm run</code> on the root folder to start the app.<br>

Open http://localhost:4200 to view it in the browser.
