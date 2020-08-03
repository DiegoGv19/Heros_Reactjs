import React,{Component} from 'react'

class Contacto extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            message:""
        }

        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeMessage = this.changeMessage.bind(this)
        
    }

    changeName(e){
        this.setState({name:e.target.value})
    }

    changeEmail(e){
        this.setState({email:e.target.value})
    }
    
    changeMessage(e){
        this.setState({message: e.target.value})
    }
    render(){
        return(
            <div className="containerFormulario">
                <form className="formulario">
                    <div className="date">
                        <label>Nombre:</label>
                        <input type="text" onChange={this.changeName}/>
                    </div>
                    <div className="date">
                        <label>Correo:</label>
                        <input type="email" onChange={this.changeEmail}/>
                    </div>
                    <div className="date">
                        <label>Mensaje:</label>
                        <input type="text" onChange={this.changeMessage}/>
                    </div>
                </form>
                <div className="containerSend">
                    <h2>{`Mi nombre es: ${this.state.name}`}</h2>
                    <h3>{`Mi correo es: ${this.state.email}`}</h3>
                    <p>{`Mi mensaje es: ${this.state.message}`}</p>
                </div>
            </div>
        )
    }

}


export default Contacto



