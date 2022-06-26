import HogTiles from "./HogTiles"
import React, { useState } from "react"

function HogContainer({ hogs }) {
    const [filteredByGreased, setFilteredByGreased] = useState(false)
    const [myHogs, setMyHogs] = useState(hogs);
    const [sortedByName, setSortedByName] = useState(false);

    function handleFilteredByGreased(event) {
        setFilteredByGreased(!filteredByGreased)

        if(event.target.checked){
            const filteredHogs = myHogs.filter(hog => {
                    return hog.greased === true
                })
                setMyHogs(filteredHogs)
        }
        else setMyHogs(hogs)
    }

    function handleSort(event) {
        setSortedByName(!sortedByName)

        if(event.target.checked){
            let sortedHogs = myHogs.slice().sort((a,b) => {
                if(a.name < b.name) return -1
                if(b.name > b.name) return 1
                return 0
            })
            setMyHogs(sortedHogs)
        }
        else setMyHogs(hogs)
    }


    

    return (
        <div>
            <div> Only Greased: <input onClick={handleFilteredByGreased} type="checkbox" id="filter"/></div>
            <div> Sort by Name: <input onClick={handleSort} type="checkbox" id="sort"/></div>
            {myHogs.map(hog => <HogTiles hog={hog}/>)}
        </div>
    )
}

export default HogContainer;