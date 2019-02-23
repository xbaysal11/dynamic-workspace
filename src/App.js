import React, { Component } from "react";
import Clock from "react-live-clock";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="clock">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"KR/Pacific"} />
        </div>
        <div className="text">
          <h1>FULLSTACK JS DEV</h1>
          <h1>DON'T WASTE YOUR TIME </h1>
          <h1>STUDY MORE THAN OTHERS</h1>
        </div>
      </div>
    );
  }
}

export default App;
