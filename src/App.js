import React, { Component } from 'react';
import './App.css';
import { Header } from "./components/header";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header/>
        <div>
        	<h1>Hi, I am Nishith Chauhan</h1>
        	<h3>This website is still under development</h3>
        </div>
      </div>
    );
  }
}

export default App;
