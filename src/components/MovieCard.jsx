import React from 'react'
import poster from '../assets/movie.jpg'
const MovieCard = () => {
  return (
    <div className='movie-card'>
      <img src={poster} alt="movieposter" />
      <h4>Oppenheimer</h4>
    </div>
  )
}

export default MovieCard
