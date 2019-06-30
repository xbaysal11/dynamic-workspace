import React, { Component } from "react";
import Clock from "react-live-clock";

export default class Clock extends Component {
  render() {
    return (
      <div>
        <div className="clock">
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"KR/Pacific"} />
        </div>
      </div>
    );
  }
}
