import React from 'react'
import poster from '../assets/poster.jpg'

const MovieDetails = () => {
    const handleClick = ()=>{
        window.open("https://instagram.com","_blank")
    }
    return (
        <div className='details-container'>
            <img src={poster} alt="" />
            <h1 className='theme'>The Big Bull</h1>
            <section>
                <h3>Overview</h3>
                <p style={{ "fontSize": "18px" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ab ea. Cupiditate architecto consequuntur non quidem harum nulla odio! Tenetur magnam sunt fugit dolor quisquam sit vel dicta cum expedita molestias at, est eligendi rem illum deserunt repellat iste, nobis tempore asperiores neque sed quasi voluptate. Quia cumque dolorem fuga.
                </p>
                <button onClick={handleClick}>Watch Now</button>
            </section>
        </div>
    )
}

export default MovieDetails
