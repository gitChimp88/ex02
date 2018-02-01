import React from 'react'

export default class Child extends React.Component {
	render(){
		return (
			<div>
				<h1>Hello {this.props.name} I am a child component!</h1>
			</div>
		)
	}
}