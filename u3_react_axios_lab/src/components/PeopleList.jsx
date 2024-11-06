import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';


export default function PeopleList(){

const [people, setPeople] = useState([])

useEffect(()=>{
  const getPeople = async() => {
    const response = await axios.get(`https://swapi.dev/api/people/`)
    setPeople(response.data.results)
    console.log(response)
  }
  getPeople()
},[])

let navigate = useNavigate()

const showPerson = (key) => {
  navigate(`${key}`)
}

return(
  <div className="starship">
    <h2>List of People</h2>
    {
      people.map((person, key) => (
        <div key={key} onClick={()=>showPerson(key)} className="card">
          <h3>
            <Link to={`/People/${person._id}`}>
            {person.name}
            </ Link>
            </h3>
        </div>
      ))
    }
  </div>
)
}