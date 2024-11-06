import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


export default function StarshipsList(){

const [starships, setStarships] = useState([])

useEffect(()=>{
  const getStarships = async() => {
    const response = await axios.get(`https://swapi.dev/api/starships/`)
    setStarships(response.data.results)
    console.log(response)
  }
  getStarships()
},[])

let navigate = useNavigate()

const showShip = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of Starships</h2>
    {
      starships.map((starship, key) => (
        <div key={key} onClick={()=>showShip(key)} className="card">
          <h3>
            <Link to={`/starships/${starship._id}`}>
            {starship.name}
            </ Link>
            </h3>
        </div>
      ))
    }
  </div>
)
}