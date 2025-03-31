import React, {useState} from "react";

let userAccessToken = "";
const clientID = "18f843303c8748d584b5906eb736912c";
const redirectURI = "http://localhost:8000"


const Spotify = {
    getAccessToken() {
        if (userAccessToken) return userAccessToken;
            
        const myToken = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime =  window.location.href.match(/expires_in=([^&]*)/);

        if(myToken && expiryTime) {
            userAccessToken = myToken[1];
            const expiresIn = Number(expiryTime[1]);

            // Clear the access token and URL parameters after expiration
            window.setTimeout(() => {
                userAccessToken = "";
            }, expiresIn * 1000);
            
            // Clear parameters from URL
            window.history.pushState('Access Token', null, '/');
            
            return userAccessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = redirect;
    },

    async search(term) {
    const accessToken = Spotify.getAccessToken();
    const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const jsonResponse = await response.json();
        if (!jsonResponse) {
            console.error("Response error");
        }
        return jsonResponse.tracks.items.map((t) => ({
            id: t.id,
            name: t.name,
            artist: t.artists[0].name,
            album: t.album.name,
            uri: t.uri,
        }));
  },

  async savePlaylist(name, trackURIs) {
        if (!name || !trackURIs.length) {
            console.error("Missing name or tracks");
            return;
        }

        const accessToken = Spotify.getAccessToken();
        const headers = { 
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        };

        try {
            // Get user ID
            const userResponse = await fetch('https://api.spotify.com/v1/me', { 
                headers: headers 
            });
            const userData = await userResponse.json();
            const userId = userData.id;

            // Create playlist
            const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ name: name })
            });
            const playlistData = await playlistResponse.json();
            const playlistId = playlistData.id;

            // Add tracks to playlist
            await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ uris: trackURIs })
            });

            return playlistId;
        } catch (error) {
            console.error('Error saving playlist:', error);
            throw error;
        }
    }
};

export { Spotify };