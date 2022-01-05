import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({data}) {
    // console.log(props.fData);
    return (
        <div className='flex-container'>
            {data.map((movie, index) => {
                return <MovieCard key={index} Poster={movie.Poster} Title={movie.Title} Website={movie.Website} />
            })}
        </div>
    )
}
