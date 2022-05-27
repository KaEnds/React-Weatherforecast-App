import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.js";
import Home from "./component/Home.js";
import Forecast from "./component/Forecast.js";
import Map from "./component/Map.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux" 
import waitingData from "./function/waitingData";
import { applyData, loading } from './action/dataAction'
import containData from './function/containData.js'
// import Airquality from './component/Airquality.js'
import { requestData, requestSuccess, getairqual } from "./action/AirAction";



const options1 = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
    'X-RapidAPI-Key': 'e4a6f3060dmsh6a2f4995a842c45p1f701djsnc35a5e98c0dd'
  }
};


function App() {

  // const Time = new Date().getTime()
  const dispatch = useDispatch()
  const [url] = useSelector(state => [state.searchURL])
  
  useEffect(() => {
    dispatch(loading())
    fetch(url.weather.url, options1)
    .then(response => response.json())
    .then(response => dispatch(applyData(containData(waitingData(response)))))

    dispatch(requestData())
    fetch(url.air.url)
    .then(response => response.json())
    .then(data => dispatch(requestSuccess(data)))

    fetch(`http://api.openweathermap.org/data/2.5/air_pollution/history?lat=16.41984&lon=101.157829&start=1606688670&end=1606747870&appid=9693a844b6237a1d186b6ae4226e0598`)
    .then(response => response.json())
    .then(data => dispatch(getairqual(data)))
    
  }, [url.searchCount])
  


  
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Home  />}/>
          <Route path="/" element={<Home />} />
          <Route path="forecast" element={<Forecast />} />
          {/* <Route path="airquality" element={<Airquality  />}  /> */}
          <Route path="map" element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
