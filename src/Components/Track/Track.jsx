import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  function renderAction(){
    if (props.isRemoval) {
      return <button className={styles["Track-action"]}>-</button>;
    } else {
      return <button className={styles["Track-action"]}>+</button>;
    }
  };

  function passTrack() {
    
  }

  return (
    <div className={styles.Track}>
      <div className={styles['Track-information']}>
        {/* <h3><!-- track name will go here --></h3> */}
        <h3>{props.track.name}</h3>
        {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
    </div>
  );
}

export default Track;