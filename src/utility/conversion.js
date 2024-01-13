// some utility functions


// Convert Unix timestamp to a human-readable time string (for sunrise, sunset , etc.)
const convertUnixTimestampToTimeString = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleTimeString();  // to local time zone this coould be improved 
};

// Utility function to convert Kelvin to Celsius
const convertKelvinToCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius;
};

// Utility function to convert Celsius to Fahrenheit
const convertKelvinToFahrenheit = (kelvin) => {
    const celsius = convertKelvinToCelsius(kelvin);
    const fahrenheit = Math.round((celsius * 9/5) + 32);
    return fahrenheit;
};
  
export { convertUnixTimestampToTimeString, convertKelvinToCelsius, convertKelvinToFahrenheit};