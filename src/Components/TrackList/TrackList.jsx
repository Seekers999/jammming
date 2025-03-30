import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist () {
    return (
        <div className={styles.TrackList}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.userSearchResults.map((track) => {
                <Track
                    track={track}
                    key={track.id} // Assuming each track has a unique id
                />
        })}
      </div>
    );
}

export default Tracklist;