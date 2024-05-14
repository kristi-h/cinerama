import React, {useState} from "react"
import {MovieCard} from "./components/MovieCard"

export default function SearchMovies() {
    const [query, setQuery] = useState("")
    const [movies, setMovies] =useState([])
   
    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("submitting")
        
        const my_api= "14d337bc8a8467e4ba6abdc022655590"
       
        const url= `https://api.themoviedb.org/3/search/movie?api_key=${my_api}&language=en-US&query=${query}&page=1&include_adult=false`

        try {
            const res = await fetch(url)  
            const data = await res.json()
            console.log(data.results)
            setMovies(data.results)
        } catch(err) {
            console.log(err)
        }
        
    }

    return(
        <>
            <form className="form" onSubmit={searchMovies}>
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query" placeholder="Harry Potter" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
                </div>

        </>
       
    )
}