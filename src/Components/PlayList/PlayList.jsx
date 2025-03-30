import React from "react";
import Tracklist from "../TrackList/TrackList";
import styles from "./PlayList.module.css";

function Playlist(props) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} />
      {/* <!-- Add a TrackList component --> */}
      <Tracklist userSearchResults={props.playlistTracks} isRemoval={props.isRemoval}/>
      <button className={styles.Playlistsave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;