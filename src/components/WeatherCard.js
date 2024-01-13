import React from "react";
import { useState, useEffect } from "react";
import humidityLogo from "../../public/media/humidityLogo.svg";
import windspeedLogo from "../../public/media/windspeedLogo.svg";
import sunriseLogo from "../../public/media/sunriseLogo.svg";
import pressureLogo from "../../public/media/pressureLogo.svg";

import { convertUnixTimestampToTimeString, convertKelvinToCelsius, convertKelvinToFahrenheit } from "../utility/conversion";

const WeatherCard = ({city}) => {
  const today = new Date;
  const[renderFlag, setRenderflag]  = useState(false);
  const[cityWeather, setCityWeater] = useState({});

  useEffect( () => {

    async function getWeatherData() {
      try {
        const resData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.API_KEY}`,{method: "GET"});
        console.log(resData);
        const json = await resData.json();
        console.log(json);
        console.log(json.name);
  
        if(json?.message?.includes("city not found")){
          setRenderflag(false);
          alert("our services are not available in this city.");
        }
        else if(json?.message?.includes("Invalid API key")){
          setRenderflag(false);
          alert("Internal server error, API down");
        }
        else if(json?.message?.includes("Nothing to geocode")){
          setRenderflag(false);
          alert("Please Enter City Name.");
        }
        else {
          if(json?.name){
            // setCity(json.name);
            setCityWeater(json);
            setRenderflag(true);
            console.log(json.name);
            
          }else{
            setRenderflag(false);
            alert("undefined error");
            console.log(json);
          }
        }
      }
      catch(err) { 
        setRenderflag(false);
        alert("Service not working we are facing some technical dificulties.");
        console.log(`in catch ${err}`);
      }
      console.log(city);
      console.log(cityWeather);
    }

    getWeatherData();

  }, [city])

    
    return renderFlag ? (
        <div>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="card" style={{ color: '#4B515D', borderRadius: '35px' }}>
                  <div className="card-body p-4">
                    <div className="d-flex">
                      <h6 className="flex-grow-1">{cityWeather?.name}</h6>
                      <h6>{today.toLocaleDateString('en-GB')}</h6>
                    </div>
                    <div className="d-flex flex-column text-center mt-5 mb-4">
                      <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }}>{convertKelvinToCelsius(cityWeather?.main?.temp)}°C/{convertKelvinToFahrenheit(cityWeather?.main?.temp)}°F</h6>
                      <span className="small fs-2" style={{ color: '#868B94' }}>{cityWeather?.weather[0]?.main}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                        <div><i className="fas fa-wind fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"><img src={windspeedLogo} alt="Wind Speed"/>{(cityWeather?.wind?.speed)*3.6} km/hr</span></div>
                        <div><i className="fas fa-tint fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"><img src={humidityLogo} alt="humidity"/>{(cityWeather?.main?.humidity)}%</span></div>
                        <div><i className="fas fa-sun fa-fw" style={{ color: '#868B94' }}></i> <span className="ms-1"><img src={sunriseLogo} alt="sunrise"/>{convertUnixTimestampToTimeString(cityWeather?.sys?.sunrise)}</span></div>
                      </div>
                      <div>
                        <img src={`http://openweathermap.org/img/wn/${cityWeather?.weather[0]?.icon}@2x.png`} width="100px" alt="Weather icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     ) : null;
};

export default WeatherCard;
