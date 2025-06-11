import { useState } from 'react'
import './App.css'
import MovieList from './MovieList'

const App = () => {
  return (
    <div className="App">
      <header>
         <h1>Flixster</h1>
      </header>
      <main>
        <MovieList page={1}/>
      </main>
    
    </div>
  )
}

export default App
