import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Info from './components/Info';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { useState } from 'react';

function App() {
  const [showDeatils,setShowDetails] = useState(true)
  return (
    <>
      <Navbar/>
      {
        showDeatils ? <MovieDetails /> : <MovieList />
      }
    </>
  );
}

export default App;
