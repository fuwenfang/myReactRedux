import React ,{ Component, PropTypes ,findDOMNode} from 'react'
import ReactDOM from 'react-dom'

export default class ToDo extends Component {
	render(){
		return (
				<li style = {{textDecoration:this.props.completed?'line-through':'none',
				cursor:this.props.completed?'pointer':'default'}} 
				onClick={this.props.myClick}>
				{this.props.text}
				</li>
			)
	}
}
ToDo.PropTypes = {
	completed:PropTypes.bool.isRequired,
	text:PropTypes.string.isRequired,
	myClick:PropTypes.func.isRequired
}