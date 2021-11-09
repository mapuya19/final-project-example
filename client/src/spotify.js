// spotify authentication
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-notes.herokuapp.com/Home"; // Production
// const redirectUri = "http://localhost:3000/Home"; // Local
const clientId = "99f44f66c083412ea9fd3c6770ee2881";

const scopes = ["user-top-read"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
