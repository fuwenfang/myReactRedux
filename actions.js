/*action 类型*/

export const ADDTO = 'ADDTO'
export const CompleteToDo = 'CompleteToDo'
export const Setfiltervisibity = 'Setfiltervisibity'

export const VisibilityFilters ={
	SHOW_ALL: 'SHOW_ALL',
  	SHOW_COMPLETED: 'SHOW_COMPLETED',
  	SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function ADDTOO(text){
	return {
		type:ADDTO,
		text
	}
}

export function CompleteToDoo(index){
	return {
		type:CompleteToDo,
		index
	}
}

export function Setfiltervisibityy(filter){
	return {
		type:Setfiltervisibity,
		filter
	}
}
