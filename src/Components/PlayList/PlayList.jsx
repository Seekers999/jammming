import React from "react";
import Tracklist from "../TrackList/TrackList";
import styles from "./PlayList.module.css";

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist />
      <button className={styles.Playlistsave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;