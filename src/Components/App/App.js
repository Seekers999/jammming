import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../PlayList/PlayList";
import './App.module.css';

function App () {
    return (
        <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults/>
            <Playlist/>
          </div>
        </div>
      </div>
        );
} 

export default App;