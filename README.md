# Spotify Notes

## Overview
This project initially started out as a spin-off of Receiptify. However, I quickly realized the scope was out of my reach. In its current state, the site pulls a connected user's Top Tracks and Top Artists from Spotify Web API and displays them on a Material UI table. 

This was the first React app I built from scratch without partners / teammates, so I'm satisfied with that.

Top Artists                |  Top Tracks
:-------------------------:|:-------------------------:
<img src="https://user-images.githubusercontent.com/15944396/151920470-c759791f-bbcd-475a-9d1e-d86b5d9b3291.png" width="400">  |  <img src="https://user-images.githubusercontent.com/15944396/151920474-e769da90-dfb4-4856-84a0-7513b056c3ec.png" width="400">

## Data Model
The application will store Users.

* users have their top artists and top tracks

An Example User:
```javascript
{
  username: "Cool Kids",
  tracks: // array of tracks
  artists: // array of artists
}
```

## User Stories
1. as a user, I can connect to my spotify account
2. as a user, I can generate new post-it notes based on top tracks
3. as a user, I can generate new post-it notes based on top artists

## Research Topics
* (2 points) Use a CSS framework throughout your site, use a reasonable of customization of the framework
    * [material ui](https://mui.com/)
* (4 points) react.js
    * used [react](https://reactjs.org/) for front-end
* (2 points) external API used
    * [spotify api](https://developer.spotify.com/documentation/web-api/) to get content

8 points total out of 8 required points

## Annotations / References Used
1. [receiptify](https://github.com/michellexliu/receiptify) - inspiration for this app
