import React, { Component } from 'react'
import Progress from './Progress'

class Professional extends Component{
	render() {
		return (
			<div className="professional">
				<div className="tran-showcase">
					<h1>Professional</h1>
					<h3>MY KNOWLEDGE LEVEL IN SOFTWARE</h3>
					<ul className="list">
						<li>JAVASCRIPT<Progress value='85'/></li>
						<li>HTML/CSS<Progress value='80'/></li>
						<li>REACTJS<Progress value='75'/></li>
						<li>NODEJS<Progress value='75'/></li>
						<li>MONGODB<Progress value='80'/></li>
						<li>ANGULARJS<Progress value='30'/></li>
						<li>JAVA<Progress value='50'/></li>
						<li>PHP<Progress value='60'/></li>
						<li>MySQL<Progress value='60'/></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Professional