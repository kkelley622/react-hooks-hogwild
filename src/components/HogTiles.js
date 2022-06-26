import React, { useState } from "react";
import HogDetails from "./HogDetails";

function HogTiles({ hog }) {
    const [visibleDetails, setVisibleDetails] = useState(false)

    function handleVisibleDetails() {
        setVisibleDetails(!visibleDetails)
    }
    return (
        <div>
            <h1> {hog.name} </h1>
            <img height="200px" width="300px" src={hog.image} onClick={handleVisibleDetails}></img>
            {visibleDetails ? <HogDetails hog={hog}/> : ""}
        </div>
    )
}

export default HogTiles;