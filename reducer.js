import {ADDTO,CompleteToDo,Setfiltervisibity,VisibilityFilters} from './actions'
const { SHOW_ALL } = VisibilityFilters;
import { combineReducers } from 'redux';

 function mytodos(state=[],action){
	switch(action.type){
		case ADDTO:
			return [...state,{text:action.text,completed:false}];
		case CompleteToDo:
			return [...state.splice(0,action.index),
					Object.assign({}, state[action.index], {
					text:state[action.index].text,
          			completed: true
        			}),
					...state.splice(action.index+1)]
		default:return state;
	}
}

 function setfiltervisibity(state = SHOW_ALL,action){
	switch (action.type){
		case Setfiltervisibity:
			return action.filter;
		default :
			return state;
	} 
}
 const todoApp= combineReducers({
		mytodos,
		setfiltervisibity
	})


export default todoApp;