import React, { Component } from 'react';

class Navbar extends Component{
	render(){
		return (
			<nav className="navbar">
				<svg className="menubar" width="30" height="30">
					<path d="M0,5 30,5" stroke="#000" strokeWidth="5" />
					<path d="M0,15 30,15" stroke="#000" strokeWidth="5" />
					<path d="M0,25 30,25" stroke="#000" strokeWidth="5" />
				</svg>
				<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#proff">Professional</a></li>
					<li><a href="#exp">Experience</a></li>
					<li><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		);
	}
}
export default Navbar;