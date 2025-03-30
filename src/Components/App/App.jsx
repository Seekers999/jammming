import {useState} from "react";
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../PlayList/PlayList";
import styles from "./App.module.css";

function App (prop) {
  const [searchResults, setSearchResults] = useState([
    {name: "name1", artist: "artist1", album: "album1", id: 1},
    {name: "name2", artist: "artist2", album: "album2", id: 2},
    {name: "name3", artist: "artist3", album: "album3", id: 3}]);

    return (
        <div>
        <h1>
          Ja<span className={styles.highlight}>mmm</span>ing
        </h1>
        <div className={styles.App}>
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults userSearchresults={searchResults}/>
            <Playlist/>
          </div>
        </div>
      </div>
        );
} 

export default App;