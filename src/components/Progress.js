import React, { Component } from 'react'

class Progress extends Component {

	render() {
		return (
			<div className="progress">
				<div style={{height: '1rem', margin: '0.6rem', width:`${this.props.value}%`, backgroundColor: 'green'}}></div>
				<div>{this.props.value}</div>
			</div>
		)
	}
}

export default Progress