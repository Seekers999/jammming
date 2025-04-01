import React from "react";
import Tracklist from "../TrackList/TrackList";
import styles from "./PlayList.module.css";
import spotifyLogo from "../../assests/spotify-logo.svg";

function Playlist(props) {
  function handleNameChange(event) {
    props.onNameChange(event.target.value);

  }

  return (
    <div className={styles.Playlist}>
      <input defaultValue={"Enter Playlist Name"} onChange={handleNameChange}/>
      {/* <!-- Add a TrackList component --> */}
      <Tracklist userSearchResults={props.playlistTracks}  onRemove={props.onRemove} isRemoval={true}/>
      <button className={styles['Playlist-save']} onClick={props.onSave}>
        <img src={spotifyLogo} alt="Spotify Logo" className={styles.spotifyLogo}/>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;