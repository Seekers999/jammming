import React from "react";
import Tracklist from "../TrackList/TrackList";
import styles from "./PlayList.module.css";

function Playlist(props) {
  function handleNameChange(event) {
    props.onNameChange(event.target.value);

  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist userSearchResults={props.playlistTracks}  onRemove={props.onRemove} isRemoval={true}/>
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;