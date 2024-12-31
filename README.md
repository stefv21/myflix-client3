# Achievement 3 Project: myFlix React App

## Objective
For this project, I built the client-side of the myFlix app using React, based on its existing server-side code (REST API and database). The goal was to create a fully interactive web app that interacts seamlessly with the backend.

## Context
Client-side development has become just as important as server-side development. In the past, web pages were primarily generated on the server and sent to the browser, leading to slower user experiences. Today, modern libraries like React and powerful browsers allow for dynamic client-side applications, and it's critical for developers to be proficient in both server-side and client-side development.

In a previous project, I worked on the server-side of myFlix, building the API and database to provide the necessary data for the app. This time, I focused on developing the client-side, which will communicate with the backend via the existing REST API. By the end of this project, I will have a fully functioning web app, built with the MERN stack (MongoDB, Express, React, and Node.js), that I can showcase as part of my portfolio.

## The 5 Ws

| **Who**  | **What**  | **When**  | **Where**  | **Why**  |
|----------|-----------|-----------|------------|----------|
| Movie enthusiasts who enjoy exploring and saving movie information. | A responsive, single-page app with routing, rich interactions, and multiple views. This client-side app will support the existing server-side, allowing users to interact with the backend seamlessly. | The app will be available for users to access at any time. | The app will be hosted online, making it accessible on any device due to its responsive design. | Movie lovers want an easy way to access movie information and save their favorite films, creating a personal collection they can revisit at any time. |

## Design Criteria

### User Stories
- **As a user**, I want to access detailed information about movies so I can learn more about the ones I’ve seen or want to see.
- **As a user**, I want to create a profile so I can save and manage my favorite movies.

### Features & Requirements

#### Essential Views & Features:

1. **Main View**
   - Displays a list of all movies with images, titles, and descriptions.
   - Allows users to filter the list using a search feature.
   - Lets users click on a movie to view more details.
   - Provides an option to log out and navigate to the Profile view.

2. **Single Movie View**
   - Shows detailed information about a selected movie, including its description, genre, director, and an image.
   - Gives users the ability to add a movie to their favorites list.

3. **Login View**
   - Users can log in with their username and password.

4. **Signup View**
   - New users can sign up by providing a username, password, email, and date of birth.

5. **Profile View**
   - Displays the user's registration details and allows them to update their profile (username, password, email, date of birth).
   - Shows a list of favorite movies and allows users to remove movies from this list.
   - Users can also deregister from the app.

#### Optional Views & Features:
1. **Actors View**
   - Provides detailed information about actors featured in the movies.

2. **Genre View**
   - Displays information about different genres, including a brief description and example movies.

3. **Director View**
   - Provides details about directors (name, bio, birth year, death year) along with example movies they’ve directed.

4. **Single Movie View (Optional Features)**
   - Shows the actors who star in the movie.
   - Displays additional movie details, such as release date and rating.
   - Offers tooltips with additional information about genres and directors.
   - Enables users to share a movie with others.
   - Shows a list of similar or related movies.

5. **Main View (Optional Features)**
   - Allows users to sort the list of movies based on different criteria (e.g., release year, rating, etc.).

6. **Profile, Single Movie, and Main Views (Optional Features)**
   - Users can create a "To Watch" list in addition to their "Favorite Movies" list.


## Technical Requirements
- The app is built as a **single-page application (SPA)** for a smoother user experience.
- **State routing** is used to navigate between different views and maintain URL consistency.
- The app includes a **search feature** to filter movies.
- I used **Parcel** as the build tool for bundling and development.
- The project is built using **React** and written in **ES2015+** syntax.
- **Bootstrap** was used for responsive styling and UI components.
- The application is built entirely with **function components**.
- The app is **hosted online** for easy access and use.
- I implemented **React Redux** to manage the state for filtering movies.
