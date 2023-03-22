import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Nav from "../components/navBar/Nav.jsx";
import Cards from "../components/cards/Cards.jsx";
// import About from "../components/";
import Ciudad from "../components/cities/Ciudad.jsx";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  // useEffect(()=>{

  // }, [])

  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((city) => city.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch} />
      </Route>

      <div>
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
      </div>

      <Route
        path="/ciudad/:ciudadIdddd"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadIdddd)} />
        )}
      />
    </div>
  );
}

export default App;
