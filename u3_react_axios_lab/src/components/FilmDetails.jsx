
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function FilmDetails(){


const [film, setFilm] = useState()

let { filmId } = useParams()

useEffect(()=>{
  const getFilm = async() => {
    const response = await axios.get(`https://swapi.dev/api/films/`)
    console.log(filmId)
    setFilm(response.data.results[filmId])
  }
  getFilm()
},[])

return film ? (
  <div className="detail">
    <h2>title: {film.title}</h2>
    
    <Link to="/films"> Return to films list</Link>
  </div>
) : <h3>Finding films...</h3>
}
