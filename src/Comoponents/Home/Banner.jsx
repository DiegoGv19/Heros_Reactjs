import React from 'react'
import PropTypes from 'prop-types'

const Banner = ({title,paragraph}) => (

    <div className="Banner">
        <h1>{title}</h1>
        <p>{paragraph}</p>
    </div>
)

Banner.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string
}

Banner.defaultProps = {
    title: "No tienen title",
    paragraph: "No tiene paragraph"
}

export default Banner
