import {useState} from "react";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../PlayList/PlayList";
import styles from "./App.module.css";

function App () {
  const [searchResults, setSearchResults] = useState([
    {
    name: "Example Track Name 1", 
    artist: "Example Track Name 1", 
    album: "Example Track Album 1", 
    id: 1,
  },

    {
    name: "Example Track Name 2", 
    artist: "Example Track Artist 2", 
    album: "Example Track Album 2", 
    id: 2,
  },

    {
    name: "Example Track Name 3", 
    artist: "Example Track Artist 3", 
    album: "Example Track Album 3", 
    id: 3,
  },]);

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
    {
    name: "Example Playlist Name 1",
    artist: "Example Playlist Artist 1", 
    album: "Example Playlist Album 1",
    id: 1,
  },

    {
    name: "Example Playlist Name 2",
    artist: "Example Playlist Artist 2",
    album: "Example Playlist Album 2",
    id: 2,
  },

  ]);

  function addTrack(track) {
    setPlaylistTracks((prevTracks) => {
      if (prevTracks.some((t) => t.id === track.id)) {
        return prevTracks; // Track already exists, do not add
      }
      return [...prevTracks, track]; // Add the new track
    });
  }

    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar/>
          <div className={styles['App-playlist']}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack} isRemoval={true}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} isRemoval={true}/>
          </div>
        </div>
      </div>
        );
} 

export default App;