import React, { Component } from 'react';
import Experience from './Experience'
import Contact from './Contact'
import Home from './Home'
import Professional from './Professional'

class Main extends Component {
  render() {
    return (
	    <div>
	      <div id="home">
			<Home />
	      </div>
	      <div id="proff">
	      	<Professional />
	      </div>
	      <div id="exp">
	      	<Experience />
	      	</div>
	      <div id="contact">
	      	<Contact/>
      </div>
    </div>
    );
  }
}

export default Main;
