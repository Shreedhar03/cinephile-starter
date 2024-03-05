import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';


const MovieList = (props) => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        try {
            console.log("getting data")
            const url = "http://localhost:5000/movies"
            let { data } = await axios.get(url)
            console.log(data)
            setMovies(data)
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        fetchMovies();
    }, [])
    return (
        <div className='movies-container'>
            <h2 style={{ "fontWeight": "600" }}>Popular Movies</h2>
            <section style={{"margin":"24px 0","display":"flex","gap":"24px","flexWrap":'wrap'}}>
                {
                    movies.map((movie, key) => {
                        return <MovieCard movie={movie} key={key} setShowDetails={props.setShowDetails}/>
                    })
                }
            </section>
        </div>
    )
}

export default MovieList
