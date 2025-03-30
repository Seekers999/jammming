import React from "react";
import styles from "./TrackList.module.css";
import Track from "../Track/Track";

function Tracklist(props) {
  const results = props.userSearchResults || [];

    return (
        <div className={styles.Tracklist}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {results.map((track) => (
                <Track
                     track={track}
                     key={track.id}// Assuming each track has a unique id
                     isRemoval={props.isRemoval}

                />
        ))}
      </div>
    );
  }

export default Tracklist;