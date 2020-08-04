import React,{Component} from 'react'
import Card from '../Molecules/Card'


class ContainerCards extends Component{
	
	constructor(props){
		super(props)

		this.state = {
			listSuperHero: []
		}
	}
	

	
	render(){
		const list = this.state.listSuperHero
		return(
			<div className="containerCards">
        		{list.map(l => <Card id={l.id} name={l.name} image={`${l.thumbnail.path}/portrait_incredible.${l.thumbnail.extension}`}/>)}
 		   </div>

		)
	}

	componentDidMount() {
		
		fetch('https://gateway.marvel.com:443/v1/public/characters?limit=12&ts=1&apikey=8f10bffaa91dc09d4d27570890ec4fcc&hash=e636a35a3f1a86a34e807e8baf81de71', {method:'get'})
		.then(response => response.json())
		.then(response => this.setState({listSuperHero: response.data.results}))

		
	}


}


export default ContainerCards