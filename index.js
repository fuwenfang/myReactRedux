import React ,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import AddTo from components/AddTo.js
import ToDoList from components/ToDoList.js
import Footer from components/Footer.js

export default class ShowApp extends Component {
	render (){
		return (
			<div>
				<AddTo AddText = {text=>console.log('Your add text is'+text)}>
				</AddTo>
				<ToDoList todos={}>
				</ToDoList>
				<Footer>
				</Footer>
			</div>

		)
	}
}