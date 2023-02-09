/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/
/*
import React from "react";



export default function App() {

  let handleClick = async event =>{
    let response = await fetch('users',{
      headers:{
        "Content-Type": "application/json",
      },
      method: "get",
    })
    let users = await response.json()
    createUser(users, event.target)
  }

  let createUser = function (users, button){
    let nameButton = document.getElementById("clickButton")
    users.forEach(user =>{
      let userItem = document.createElement("h2")
      userItem.innerText = user.name
      nameButton.appendChild(userItem)
    })


  return (
    <div>
        <button id="clickButton" onClick={handleClick}>Test</button>
    </div>
  );
  }}
  */


import React, { useState, useEffect } from "react";

function App() {
  const [stringData, setStringData] = useState("");
  

  useEffect(() => {
    async function fetchData() {
      console.log("test");
      const response = await fetch("http://localhost:8080/cinemagic/test");
      const data = await response.text();
      console.log(data);
      setStringData(data);
    }
    fetchData();
  },[]);

  return (
    <div>
      <p>{stringData}</p>
    </div>
  );
}

export default App;