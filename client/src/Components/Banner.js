import React from "react";
import logo from "./../logo.jpg";
import "./../App.css";

function Banner() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p id = "app-name">{!data ? "Loading..." : data}</p> */}
        <p id = "app-name">Musingo...</p>
        <a href="/home">Home</a>
      </header>
    </div>
   
  );
}

export default Banner;