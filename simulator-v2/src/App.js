import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";

import store from "./stores/store";

import CauseForm from "./components/CauseForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CauseForm />
        </div>
      </Provider>
    );
  }
}

export default App;
