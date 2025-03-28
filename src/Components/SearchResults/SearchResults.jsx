import React from "react";
import styles from "./SearchResults.module.css";
import Tracklist from "../TrackList/TrackList";


function SearchResults () {
    return (
        <div className="SearchResults">
        {/* <!-- Add a TrackList component --> */}
        <Tracklist/>
      </div>
        );
}

export default SearchResults;