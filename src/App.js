import React, { Component } from "react";
import "./App.scss";
import { Currency, Weather, TodoList } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Currency />
        <Weather />
        <TodoList />
      </div>
    );
  }
}

export default App;
