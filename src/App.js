import React from 'react'
import Child from './Child'

export default class App extends React.Component {
	render(){
		return (
			<div>
				<Child name = "Mike"/>
			</div>
		)
	}
}