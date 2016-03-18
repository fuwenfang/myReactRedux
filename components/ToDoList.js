import React ,{ Component, PropTypes ,findDOMNode} from 'react'
import ReactDOM from 'react-dom'
import ToDo from './ToDO'

export default class ToDoList extends Component {
	render(){
		return (
			<ul>
			{this.props.todosarr.map((todo,index)=>
				<ToDo {...todo} key = {index} myClick={()=>this.props.showClick(index)}></ToDo>
			)}
			
		</ul>

		)
	}
}
ToDoList.PropTypes = {
	todosarr: PropTypes.arrayOf(PropTypes.shape({
    	text: PropTypes.string.isRequired,
    	completed: PropTypes.bool.isRequired
  	}).isRequired).isRequired,
	showClick:PropTypes.func.isRequired
}