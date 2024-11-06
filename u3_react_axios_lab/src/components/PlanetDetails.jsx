
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PlanetDetails(){


const [planet, setPlanet] = useState()

let { planetId } = useParams()

useEffect(()=>{
  const getPlanet = async() => {
    const response = await axios.get(`https://swapi.dev/api/planets/`)
    console.log(planetId)
    setPlanet(response.data.results[planetId])
  }
  getPlanet()
},[])

return planet ? (
  <div className="detail">
    <h2>Name: {planet.name}</h2>
    <h3>Climate: {planet.climate}</h3>
    <h3>Terrain: {planet.terrain}</h3>
    <h3>Gravity: {planet.gravity}</h3>
    <h3>Population: {planet.population}</h3>
    
    <Link to="/Planets"> Return to Planet list</Link>
  </div>
) : <h3>Finding Planets...</h3>
}
