import React from "react"

/*
Filter stores by typing into the search bar. Only stores with a name matching the search term should be store in the table.
 */

function Search() {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..." onChange={() => console.log("Searching...")} />
        </div>
    );
}

export default Search;