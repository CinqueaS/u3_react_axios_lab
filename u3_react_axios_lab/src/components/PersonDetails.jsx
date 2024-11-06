
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PersonDetails(){


const [person, setPerson] = useState()

let { personId } = useParams()

useEffect(()=>{
  const getPerson = async() => {
    const response = await axios.get(`https://swapi.dev/api/people/`)
    console.log(personId)
    setPerson(response.data.results[personId])
  }
  getPerson()
},[])

return person ? (
  <div className="detail">
    <h2>Name: {person.name}</h2>
    <h3>Birth year: {person.birth_year}</h3>
    <h3>Gender: {person.gender}</h3>
    <h3>Height: {person.height}</h3>
    <h3>Mass: {person.mass}</h3>
    
    <Link to="/People"> Return to People list</Link>
  </div>
) : <h3>Finding People...</h3>
}
