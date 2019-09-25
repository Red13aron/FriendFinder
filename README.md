# FriendFinder
a website that surveys and then makes suggestions based on that for finding friends.

## Overview
This app was created to provide users of this site with a platform to find other people in our database with similar personalities.  That way they can hang out!

## Organization
This app is broken up into several distinct files/folders:

1. `server.js` runs the server for our code handles our port, and generally hands the api/html requests to their respective files.

2. The `app` folder contains the following folders:
    - `assets` which contains our custom css that helps bootstrap.
    - `data` which contains our `friends.js` that is our database of potential matches
    - `public` which contains our html pages `home.html` and `survey.html` that get fed into our html routes
    - `routing` which contains our `apiRoutes.js` and our `htmlRoutes.js` that helps the server to manage routes and requests

### How to run
The app may be run in the terminal by typing node server.js or by typing npm run watch if nodemon has been installed.

## Example Gifs:

-Using FriendFinder

![Example of running the Server](https://i.imgur.com/SiRFcUh.gifv)

![Example of the User finding a friend](https://i.imgur.com/gfN7uRH.gifv)

## Technologies
FriendFinder uses the following technologies
1.Express, manages connections and api/html routes
2.Path, allows users to use saved html files in there routes on the interwebs

## Deployment

Check out the website: https://friendfindershane.herokuapp.com/

## Collaborators

**Shane Nelson!**
