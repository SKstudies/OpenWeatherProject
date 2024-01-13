import React from "react";
import { useState,useEffect } from "react";
import LogoImg from "../../public/media/weather-app.png"


const Header = ({onSearch}) => {

  const [city, setCity] = useState("");



    return (
        <div className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand"><img className="img-thumbnail" width="50" height="50" src={LogoImg} alt="Weather App Logo" /></a>
          <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={city} onChange={(e) => {setCity(e.target.value);}}/>
            <button className="btn btn-outline-success" type="submit" onClick={() => onSearch(city)}>Search</button>
          </div>
        </div>
      </div>
    
    );
}

export default Header;