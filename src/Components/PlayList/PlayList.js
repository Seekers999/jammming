import React from 'react';
import './PlayList.css';

const PlayList = () => {

    return (
        <div className="Playlist">
          <input defaultValue={'New Playlist'}/>
          <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;