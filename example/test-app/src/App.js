import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FeatureWithVariantsDisplay from "./appStuff/containers/FeatureWithVariantsDisplay";
import FeatureDisplay from "./appStuff/containers/FeatureDisplay";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to LD Redux Components</h1>
        </header>
        <div className="App-intro">
          <FeatureWithVariantsDisplay />
        </div>
        <div className="App-intro">
          <FeatureDisplay />
        </div>
      </div>
    );
  }
}

export default App;
