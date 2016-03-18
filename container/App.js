import React ,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import {ADDTOO,CompleteToDoo,Setfiltervisibityy,VisibilityFilters} from '../actions'

import AddTo from '../components/AddTo'
import ToDoList from '../components/ToDoList'
import Footer from '../components/Footer'

 export default class App extends Component {
	render (){
		const { dispatch, visibleTodos, visibilityFilter} = this.props;
		return (
			<div>
				<AddTo AddText = {text=>{dispatch(ADDTOO(text));console.log('Your add text is'+text)}}>
				</AddTo>
				<ToDoList todosarr={visibleTodos} 
				showClick = {(index)=>{dispatch(CompleteToDoo(index));console.log('clicked:'+index)}}>
				</ToDoList>
				<Footer filter = {visibilityFilter} filterChange = {filter=>{dispatch(Setfiltervisibityy(filter));console.log('your filter is '+filter)}}>
				</Footer>
			</div>

		)
	}
}
App.propTypes = {
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
}

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed)
  }
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleTodos: selectTodos(state.mytodos, state.setfiltervisibity),
    visibilityFilter: state.setfiltervisibity
  }
  
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select)(App)