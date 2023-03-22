import React from "react";
import SearchBar from "../searchBar/SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navBar">
      <Link to="/">
        <div className="conteiner">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/1779/1779754.png"
            alt="logo de nubes"
          />
          <h3>Weather App</h3>
        </div>
      </Link>
      <div className="search">
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default Nav;
