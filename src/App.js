import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';

function App() {

  const [starShipArray, setStarShipArray] = useState([]);
  const [starShipUrl,setStarShipUrl] = useState("http://swapi.dev/api/starships");
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(()=> {
    axios.get(starShipUrl)
    .then((res) => {
      console.log(res.data);
      setStarShipArray(res.data.results)
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      
    })
  },[starShipUrl])
  
  //res will get you the object, res.data gets you the information in the object

  return (
    <div className="App">
      <h2>Star wars API</h2>

      {
        prevUrl ? 
        <button onClick={ () => setStarShipUrl(prevUrl)}>Previous Star Ships</button> 
        : null
      }
      
      {
        nextUrl ? 
        <button onClick={ () => setStarShipUrl(nextUrl)}>Next Star Ships</button>
        : null
      }

    
      
      

      <h2> StarShip Names</h2>
      {
        starShipArray.map((ship,index) => (
          <p key={index}>
            {ship.name}
          </p>
        ))
      }
      
    </div>
  );
}

export default App;
