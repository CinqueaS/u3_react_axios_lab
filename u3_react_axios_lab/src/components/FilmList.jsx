import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


export default function FilmList(){

const [films, setFilms] = useState([])

useEffect(()=>{
  const getFilms = async() => {
    const response = await axios.get(`https://swapi.dev/api/films/`)
    setFilms(response.data.results)
    console.log(response)
  }
  getFilms()
},[])

let navigate = useNavigate()

const showFilm = (key) => {
  navigate(`${key}`)
}

return(
  <div className="film">
    <h2>List of Films</h2>
    {
      films.map((film, key) => (
        <div key={key} onClick={()=>showFilm(key)} className="card">
          <h3>
            <Link to={`/films/${film._id}`}>
            {film.title}
            </ Link>
            </h3>
        </div>
      ))
    }
  </div>
)
}