import React from 'react'
import poster from '../assets/movie.avif'
import star from '../assets/star.svg'

const MovieCard = (props) => {
  const handleClick = () => {
    props.setShowDetails(true)
  }
  const movie = props.movie
  
  return (
    <div className='movie-card'>
      <img src={poster} alt="movieposter" className='poster' />
      <h4 onClick={handleClick}>{movie.name}</h4>
      <div className='star-container'>
        <img src={star} alt="star" className='star' />
        <p>{movie.rating}</p>
      </div>
      <p>{movie.duration}</p>
    </div>
  )
}

export default MovieCard
