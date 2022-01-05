import React from 'react'

export default function SearchBox({handleSearch}) {
    return (
        <div className='search-container'>
            <input className='search' type="text" placeholder='Search by Title, Director, Genre, Actors, Plot' onChange={(event) => handleSearch(event.target.value)} />   
        </div>
    )
}
