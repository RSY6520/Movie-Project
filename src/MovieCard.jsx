import React from 'react'

export default function MovieCard({Poster, Website, Title}) {
        // const {Poster, Title, Website} = movie
    return (
        <div className="movie-container">
            <img className="movie-poster" src={Poster} alt="Poster"/>
            <div className='title-button-container'>
            <p className='movie-title'>Title: {Title}</p>
            <a rel='noreferrer' href={Website} target="_blank"><button className='watch-button'>Watch Now</button></a>
            </div>
        </div>
    )
}
