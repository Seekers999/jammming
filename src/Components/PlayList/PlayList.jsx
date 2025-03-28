import React from "react";
import Tracklist from "../TrackList/TrackList";
import "./PlayList.module.css";

function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist />
      <button className="Playlist-save">
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;