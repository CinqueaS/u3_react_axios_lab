import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import Home from './components/Home';
import StarshipList from './components/StarshipList';
import NavBar from './components/Nav';
import axios from "axios"
import ShipDetails from './components/ShipDetails';
import FilmList from './components/FilmList';
import FilmDetails from './components/FilmDetails';
import PlanetsList from './components/PlanetList';
import PlanetDetails from './components/PlanetDetails';
import PeopleList from './components/PeopleList';
import PersonDetails from './components/PersonDetails';




const App = () => {
  const [starShips, setStarShips] = useState([]);
  const [films, setFilms] = useState([])
  const [planets, setPlanets] = useState([])
  const [people, setPeople] = useState([])

  useEffect(() => {
  const getStarships = async() =>{
    const response = await axios.get('https://swapi.dev/api/starships/')
     setStarShips(response.data.results) 
  }
  getStarships()
  }, [])

  useEffect(() => {
  const getFilms = async() =>{
    const response = await axios.get('https://swapi.dev/api/films/')
     setFilms(response.data.results) 
    }
  getFilms()
  }, [])

  useEffect(() => {
  const getPlanets = async() =>{
    const response = await axios.get('https://swapi.dev/api/planets/')
     setPlanets(response.data.results) 
  }
  getPlanets()
 }, [])

  useEffect(() => {
  const getPeople = async() =>{
    const response = await axios.get('https://swapi.dev/api/people/')
     setPeople(response.data.results) 
  }
  getPeople()
  }, [])


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarshipList starShips={starShips}/>} /> 
        <Route path="/starships/:starshipId" element={<ShipDetails />} />
        <Route path="/films" element={<FilmList films={films}/>} />
        <Route path="/films/:filmId" element={<FilmDetails />} />
        <Route path="/planets" element={<PlanetsList planets={planets}/>} />
        <Route path="/planets/:planetId" element={<PlanetDetails />} />
        <Route path="/people" element={<PeopleList people={people}/>} />
        <Route path="/people/:personId" element={<PersonDetails />} />
      </Routes>
    </div>
  );
}

export default App;