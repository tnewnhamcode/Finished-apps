import React, { useState } from 'react';
import axios from 'axios';
import './weatherapp.css'
function Weather(){
  const[weatherData,setWeatherData]=useState('');
  const [city,setCity]=useState('');
const fetchweatherData=()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=22cd1be9ae08802bde485430d97a3ec2`)
  .then(response => {
     setWeatherData(response.data);
})
  .catch((error) => {
    console.error(error)
    // Handle any errors that occurred during the fetch
});
};
  const handleInputChange=(event)=>{
   setCity(event.target.value)
  };
  const handleKeyPress=(event)=>{
    if (event.key==='Enter'){
      fetchweatherData()
    }
  }

  

  return (
    <div style= {{backgroundColor:'lightblue', borderLeft: '2px solid black',border:'2px solid black', paddingBottom:'100vh', textAlign:'center', marginLeft:'0px'}}>
      <h1 style= {{textAlign:'center', color:'bone', marginTop:'0px', fontSize:'6vw'}}>Weather Check</h1>
      <p style={{fontSize:'23px', fontFamily:'gothic'}}>Nearest City~</p>
      <input name='city' style={{textAlign:'center', fontFamily:'gothic', fontSize:'18px'}} type='text' onChange={handleInputChange} onKeyDown={handleKeyPress}> 
      </input>
      
      <br></br>
      <br></br>
      <button id='butt' style={{ marginLeft:'1vw', fontSize:'15px'}} onClick={fetchweatherData}>Check:</button>
      <p>Temperature: {weatherData&&Math.floor(weatherData.main.temp-273.15)}C</p>
       <p> Humidty: {weatherData&&weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData&&weatherData.wind.speed} M/H </p>
      <button id='butt' style={{ marginLeft:'1vw', fontSize:'15px'}} onClick={fetchweatherData}>Check:</button>
    </div>
  )};
  


export default Weather;

