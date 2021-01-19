/* eslint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
   
   
   
    //array destructuring
    const [stack, setStack] = useState ("")

    const items = words(stack, /[^-^+^*^/]+/g)
    //es similar a un if 
    //esVerdadero ? resultadoPorVerdadero : resultadoPorFalso
    const value= items.length > 0 ? items[items.length-1] : "0"
       // Lo que ejecuta la función
    console.log("Renderización de App", items)
   
    return (
    <main className='react-calculator'>
        <Result value= {value} />
        <Numbers onClickNumber={number=> {
            console.log("Number:", number)  
            setStack (`${stack}${number}`)   
        }}/>
        <Functions
            onContentClear={() => {
                console.log("Content Clear:")
                setStack('')
            }}
            onDelete={() => {
                if(stack.length >0) {
                    console.log("onDelete:")
                    const newStack = stack.substring(0, stack.length -1)
                    setStack(newStack)
                }
            }}
        />

        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
                setStack(`${stack}${operation}`)

            }}
            onClickEqual={equal =>{
                console.log("Equal:", equal)
            //    setStack(`${stack}${equal}`)
                  setStack(eval(stack).toString())
            }}
            />
    </main>)
}

export default App