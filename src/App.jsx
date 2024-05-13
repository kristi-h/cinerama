import React from "react"
import './style.css'
import SearchMovie from "./components/searchMovie"

function App() {
  return (
    <>
      <div className='container'>
        <h1 className="title">Movie Search</h1>
        <SearchMovie />
      </div>
    </>
  )
}

export default App
