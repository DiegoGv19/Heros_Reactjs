import React from 'react'
import PropTypes from 'prop-types'

const HeroInformation = ({name,nickName,description,imageTwo})=>(

    <div className="containerGrid">
        <div className="containerInformation">
            <h2>{name}</h2>
            <h3>{nickName}</h3>
            <p>{description}</p>
        </div>
        <img className="imageSuperHero" src={imageTwo} alt={name}/>
    </div>
)

HeroInformation.propTypes = {
    name: PropTypes.string,
    nickName: PropTypes.string,
    description: PropTypes.string,
    imageTwo: PropTypes.string


}

HeroInformation.defaultProps = {
    name: "No hay nombre",
    nickName: "No hay nickname",
    description: "No hay descripcion",
    imageTwo: "https://image.flaticon.com/icons/png/512/16/16480.png"


}


export default HeroInformation