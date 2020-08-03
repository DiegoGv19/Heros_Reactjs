import React from 'react'
import {Link, NavLink} from 'react-router-dom'


const Header = () => (
    <header className = "header">
        <div className="headerMain">
            <Link to = "/" >
                <img className="headerImage" src="https://lh3.googleusercontent.com/proxy/pJMq85Sp222vc-3_34kw4Kw3VU6Gu-0I5bsrCOw4Ahq_6Ilg6iHUALoRg058yTYU-Ui9qRy-QwdC3g8DAmRM7aJBlL1RhDnbXzttl_bF1i22ikUNkyrSJ3s0DjhHPpU" alt="Marvel logo"/>
            </Link>
            <nav className ="headerMenu">
                <ul className="menuMain">
                    <li><NavLink to="/" exact activeClassName="activado" className="menuLink">Home</NavLink></li>
                    <li><NavLink to="/superhero" exact activeClassName="activado" className="menuLink">Super Hero</NavLink></li>
                    <li><NavLink to="/contacto" exact activeClassName="activado" className="menuLink">Contacto</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    </header>

)


export default Header

