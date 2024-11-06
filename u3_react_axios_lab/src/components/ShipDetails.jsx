
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ShipDetails(){


const [starship, setStarship] = useState()

let { starshipId } = useParams()

useEffect(()=>{
  const getStarship = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/`)
    console.log(starshipId)
    setStarship(response.data.results[starshipId])
  }
  getStarship()
},[])

return starship ? (
  <div className="detail">
    <h2>Name: {starship.name}</h2>
    <h3>Model: {starship.model}</h3>
    <h3>Manufacturer: {starship.manufacturer}</h3>
    <h3>Cargo capacity: {starship.cargo_capacity}</h3>
    <h3>Cost in credits: {starship.cost_in_credits}</h3>
    
    <Link to="/Starships"> Return to starship list</Link>
  </div>
) : <h3>Finding starships...</h3>
}
