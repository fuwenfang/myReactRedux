import React ,{ Component, PropTypes ,findDOMNode} from 'react'
import ReactDOM from 'react-dom'

export default class AddTo extends Component {
	render(){
		return (
			<p><input type = "text" ref = "inputVal"/>
			<input type = "button" value = "Add" onClick = {e=>this.handleClick(e)}/></p>
			)
	}
	handleClick(e) {
		const inputNode = findDOMNode(this.refs.inputVal);
		const inputVal = inputNode.value.trim();
		this.props.AddText(inputVal);
	}
}
