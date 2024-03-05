import './App.css';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import { useState } from 'react';

function App() {
  const [showDeatils,setShowDetails] = useState(false)
  return (
    <>
      <Navbar/>
      <MovieList setShowDetails={setShowDetails}/>
    </>
  );
}

export default App;
