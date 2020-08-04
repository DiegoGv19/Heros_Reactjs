import React,{Component} from 'react'
import PropTypes from 'prop-types'


class HeroInformation extends Component{

    constructor(props){
        super(props)

        this.state ={
            superhero: {}
        }
    }

    render(){
        return(
            <div className="containerGrid">
                <div className="containerInformation">
                    <h2>{this.state.superhero.name}</h2>
                    <h3>{`Ultimo cambio: ${this.state.superhero.modified}`}</h3>
                    <p>{this.state.superhero.description}</p>
                </div>
                
                <img className="imageSuperHero" src={this.state.superhero.thumbnail ? `${this.state.superhero.thumbnail.path}/portrait_incredible.${this.state.superhero.thumbnail.extension}`: 'nada'} alt={this.state.superhero.name}/>

            </div>
        )
    }

    componentDidMount(){
        fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.id}?ts=1&apikey=8f10bffaa91dc09d4d27570890ec4fcc&hash=e636a35a3f1a86a34e807e8baf81de71`, {method:'get'})
		.then(response => response.json())
		.then(response => this.setState({superhero: response.data.results[0]}))

    }

    componentDidUpdate(){
        console.log(this.state.superhero.thumbnail.path)        
        console.log(this.state.superhero.thumbnail.extension)
        //<img className="imageSuperHero" src={`${this.state.superhero.thumbnail.path}/portrait_incredible.${this.state.superhero.thumbnail.extension}`} alt={this.state.superhero.name}/>
       
    }
}



export default HeroInformation