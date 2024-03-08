
import React, { useState } from "react"
import Card from 'react-bootstrap/Card'
import './App.css'

import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4ffefa447ec7b0c7b9f216ec1f4a69b5`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="App">
      
      <div className="container">

      <Card >
      <div className="search">
        <input className="input"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="ENTER LOCATION"
          type="text"
        />
      </div>
      <Card.Body>
        <Card.Title className="cardH"> Today's Wheather</Card.Title><br/>
        <Card.Subtitle className="cardResult">city: {data.name}</Card.Subtitle>
        <Card.Text className="cardResult">
        Temprature: {data.main?.temp}<br/>
        
        </Card.Text>
        <Card.Text className="result">
      "  {data.weather?.[0]?.description} "
        </Card.Text>
    
      </Card.Body>
    </Card>
      
      </div>
    </div>
  );
}
export default App;
