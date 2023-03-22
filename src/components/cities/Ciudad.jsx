import React from "react";
import "./Ciudad.css";

const Ciudad = ({ city }) => {
  return (
    <div className="bueno">
      <div className="cardCitie">
        <div className="title">
          <h2>{city.name}</h2>
          <div className="icon">
            <img
              src={`http://openweathermap.org/img/wn/${city.img}@2x.png `}
              className="iconhere"
              alt="icon by clima"
            />
          </div>
        </div>
        <div className="info">
          <p>Temperatura: {city.temp} ºC</p>
          <p>Clima: {city.weather}</p>
          <p>Viento: {city.wind} km/h</p>
          <p>Cantidad de nubes: {city.clouds}</p>
          <div className="position">
            <div className="left">
              <p>Latitud</p>
              <p>{city.latitud}º</p>
            </div>
            <div className="right">
              <p>Longitud</p>
              <p>{city.longitud}º</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ciudad;
