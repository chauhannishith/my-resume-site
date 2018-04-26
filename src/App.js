import React, { Component } from 'react';
import './App.css';
import { Header } from "./components/header";
/*import logo from './logo.svg';*/

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <h1>Hi, I am Nishith Chauhan</h1>
        <h3>This website is still under development</h3>
      </div>
    );
  }
}

export default App;
