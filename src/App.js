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
      </div>
    );
  }
}

export default App;
