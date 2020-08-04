import React from 'react'
import PropTypes  from 'prop-types'
import {Link} from 'react-router-dom'

const Card = ({id,name,image}) =>(
    <div className="card">
        <Link to= {`/superhero/${id}`}>
            <img className="cardImage" src={image} alt={name}/>
        </Link>
        <div className="cardInformation">
            <h2>{name}</h2>
        </div>
    </div>

)


Card.propTyps = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string
}
Card.defaultProps = {
    id: 0,
    name : "no tiene nombre",
    image: "https://image.flaticon.com/icons/png/512/16/16480.png"
}


export default Card