import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";

import store from "./stores/store";

import CauseForm from "./components/CauseForm";
import ContributionForm from "./components/ContributionForm";
import Simulation from "./components/Simulation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CauseForm />
          <ContributionForm />
          <Simulation />
        </div>
      </Provider>
    );
  }
}

export default App;
