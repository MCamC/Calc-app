// importar react
import React from 'react'
import PropTypes from 'prop-types'

//componente fcional

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() =>{
            console.log("onClick en el Button")
            clickHandler(text)
        }}>
            <span>{text}</span>
        </button> 
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button