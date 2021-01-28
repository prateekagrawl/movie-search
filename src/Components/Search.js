import React from 'react'

function Search({inputHandler, searchHandler}) {
    return (
       <section>
           <input type="text"
            placeholder="Search for a movie and press Enter key..." 
            className="searchBox"
            onChange={inputHandler}
            onKeyPress={searchHandler}></input>
       </section>
    )
}

export default Search
