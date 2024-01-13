import React, { useState } from "react";
// import { useEffect } from "react";
import Header from "./Header";
import WeatherCard from "./WeatherCard";


export default function App() {

  const [city, setCity] = useState("");
  // const [cityWeather, setCityWeater] = useState("");
  const[cityWeather, setCityWeater] = useState({});



  const getDataBack = (getCity) => {
    setCity(getCity);
  }


  return (
    <React.Fragment>
      <Header onSearch = {getDataBack}/>
      {city && <WeatherCard city = {city}/>}
    </React.Fragment>
  );
}
