import Header from './Container/header';
import $ from 'jquery'
import Dashboard from './Container/dashboard';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import './App.css';

const light = ["#R1", "#Y1", "#G1", "#R2", "#Y2", "#G2", "#R3", "#Y3", "#G3", "#R4", "#Y4", "#G4"];

function App() {
  
  const [data, setData] = useState([0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0]);

  function switchState(id, state) {
    if (state === 1) {
      $(id).addClass("ON");
    }
    else{
      $(id).removeClass("ON");
    }
  }

  useEffect(() => {
    
    const socket = io("http://localhost:4000/", {
      withCredentials: true
    });

    socket.on('data', incomingData => {
      var modifiedArr = [];
      for (let i = 0; i < incomingData.length; i++){
        if (i % 2 === 0) {
          modifiedArr.push(Number(incomingData[i]));
        }
      }
      console.log(modifiedArr);
      setData(() => modifiedArr);
    });



  });

  //updating data
  for (let i = 0; i < data.length; i++){
    switchState(light[i], data[i]);
  }

  return (
    <div className="App">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
