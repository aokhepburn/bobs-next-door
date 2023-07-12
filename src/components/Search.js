import React from "react"

/*
Filter stores by typing into the search bar. Only stores with a name matching the search term should be store in the table.
 */

function Search({updateSearchText}) {
    return(
        <div className="search-container">
            <input type="text" placeholder="Search names..."
            onChange={(event) => updateSearchText(event)} />
        </div>
    );
}

export default Search;