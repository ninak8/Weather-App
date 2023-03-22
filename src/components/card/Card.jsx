import React from "react";
import "./Card.css";
// import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Card = ({ min, max, name, img, onClose, id }) => {
  return (
    <div className="card">
      <div id="closeIcon" className="containerbutton">
        <button onClick={onClose} className="button">
          ❌
        </button>
      </div>
      <div className="infor">
        <Link to={`/ciudad/${id}`}>
          <h5 className="name">{name}</h5>
        </Link>
        <div className="photo">
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="80"
            height="80"
            alt=""
          />
        </div>
        <div className="temps">
          <div className="temp">
            <p>Min {min}°</p>
          </div>
          <div className="temp">
            <p>Max {max}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
