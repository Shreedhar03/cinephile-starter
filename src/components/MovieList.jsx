import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';


const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async () => {
        try {
            const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=54cdb44abcd9f6e8c4308299f16ba382"
            let { data } = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=54cdb44abcd9f6e8c4308299f16ba382")
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
            <h2 style={{ "fontWeight": "600" }}>Trending Movies</h2>
            <section style={{"margin":"24px 0","display":"flex","gap":"24px","flexWrap":'wrap'}}>
                {
                    [1, 2, 3, 4, 5, 6, 7].map((_, key) => {
                        return <MovieCard key={key} />
                    })
                }
            </section>
        </div>
    )
}

export default MovieList
