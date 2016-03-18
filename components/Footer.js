import React ,{ Component, PropTypes ,findDOMNode} from 'react'
import ReactDOM from 'react-dom'

export default class Footer extends Component {
	render(){
		return (
			<p>
				show:
				{''}
				{this.filter('SHOW_ALL','oneItem')}
				{','}
				{this.filter('SHOW_COMPLETED','secondItem')}
				{','}
				{this.filter('SHOW_ACTIVE','threeItem')}
			</p>

			)
	}
	filter(filet,name){
		if(filet != this.props.filter){
			//return filet
			//alert(this.props.filter) ---undefined
			
		}
		return (
			<a href="#" onClick ={e=> 
				{e.preventDefault();this.props.filterChange(filet);}}>{filet}</a>
		)
	}
}
Footer.PropTypes = {
	filterChange: PropTypes.func.isRequired,
	filter: PropTypes.string.isRequired

}