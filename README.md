# Brielievers Frontend application

This application's MVP was built in a [2 week sprint] (https://trello.com/b/JjgnulJl/cheese-sommelier) as a final project of the Makers Academy fullstack development bootcamp.
It was built by a team of 5 developers ([Hazel] (https://github.com/hash-smy), [Oli] (https://github.com/OliLoftus), [Rich] (https://github.com/rashworth7), [Sam] (https://github.com/iamsahm), [Charlotte] (https://github.com/charlottemothersole)) using AGILE methodologies.

## About the application

The application is the frontend for a cheese sommelier app, which allows users to:

-   Search for cheeses by type
    -   Using the menu in the navbar to select a cheese type
-   Get a random cheese
    -   Each time a user visits the homepage a random cheese is displayed
-   Rate cheeses
    -   Users can rate cheeses out of 5 in the individual cheese pages
-   Get recommendations based on their rating
    -   User ratings are used to calculate a user preference and return a cheese that fits their highest rated preference but that they haven't yet rated
-   See a map of cheeses by country
    -   Users can see a map of the world with markers for cheeses and a link to the cheese page

It has been built with React and styled using Material UI.

## Running the app

`deployment`

Run the app locally following these steps:

```
git clone https://github.com/iamsahm/cheese-frontend.git frontend
cd frontend
npm install
npm start
```

## Folder Structure

Final project

-   cheese_api
-   cheese-frontend

## Running tests

The test facilities use jest and cypress. To run the tests, run the following commands:

```
npm test
```
