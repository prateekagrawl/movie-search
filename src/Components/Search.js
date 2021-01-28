import React from 'react'

function Search({handleInput, search}) {
    return (
       <section>
           <input type="text"
            placeholder="Search for a movie and press Enter key..." 
            className="searchBox"
            onChange={handleInput}
            onKeyPress={search}></input>
       </section>
    )
}

export default Search
