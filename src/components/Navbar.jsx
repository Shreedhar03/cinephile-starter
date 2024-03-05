import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <h3 className='theme'>CinePhile</h3>
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New</li>
        </ul>
        <input type="text" placeholder='Search movies...' />
      </div>

    </nav>
  )
}

export default Navbar
