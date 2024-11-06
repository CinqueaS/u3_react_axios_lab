import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


export default function PlanetsList(){

const [Planets, setPlanets] = useState([])

useEffect(()=>{
  const getPlanets = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    setPlanets(response.data.results)
    console.log(response)
  }
  getPlanets()
},[])

let navigate = useNavigate()

const showPlanet = (key) => {
  navigate(`${key}`)
}

return(
  <div className="Planet">
    <h2>List of Planets</h2>
    {
      Planets.map((Planet, key) => (
        <div key={key} onClick={()=>showPlanet(key)} className="card">
          <h3>
            <Link to={`/Planets/${Planet._id}`}>
            {Planet.name}
            </ Link>
            </h3>
        </div>
      ))
    }
  </div>
)
}