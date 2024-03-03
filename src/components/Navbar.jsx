import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <h3 className='theme'>CinePhile</h3>
      <ul>
        <li>Home</li>
        <li>Series</li>
        <li>Movies</li>
        <li>New</li>
      </ul>
      <input type="text" placeholder='Search movies...'/>
    </nav>
  )
}

export default Navbar
