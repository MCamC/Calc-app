// importar react
import React from 'react'

//componente fcional

const Button = ({type, text}) => {
    return (
        <button className={type}>
            <span>{text}</span>
        </button> 
    )
}

export default Button