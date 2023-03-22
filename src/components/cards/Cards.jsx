import React from "react";
import "./Cards.css";

import Card from "../card/Card.jsx";

const Cards = ({ cities, onClose }) => {
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      ))}
    </div>
  );
};

export default Cards;
