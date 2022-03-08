import { useState, useEffect } from 'react'
import Div from "./Div"


function ItemListContainer({ div}) {
    const [ count, setCount] = useState(0)
    const [ bool, setBool] = useState(true)

    useEffect(()=>{
        console.log('alerta alerta alerta alertaaa 0 always')
        return ()=>{console.log('limpieza')} //
    })
    useEffect(()=>{
        console.log('alerta alerta alerta alertaaa 1 - one time at start')
        
    }, [])
    useEffect(()=>{
        console.log('only if bool changes')
        
    }, [bool])


    let contador = 0
    
    const handleCount = ()=> {
        //contador += 1
        //console.log(contador)
        setCount(count+1)
    }


    console.log('item list container 2')
    console.log(count)


    return(
        <div>
        { div() }

        <itemCount initial= {1} stock={25} onAdd={} />
        <label>{ count }</label>
        <button onClick={ handleCount }>Click</button>
        <button onClick={ ()=> setBool (!Bool) }>Boleano</button>
        </div>
    )
}

export default ItemListContainer
