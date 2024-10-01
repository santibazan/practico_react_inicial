import React, { useEffect, useState } from 'react'

export const ComponentUseEffect = () => {
    const [state, setState] = useState(false)

    useEffect(()=>{
        console.log("Componente montado ");
        return ()=>{
            console.log("Componente desmontado");
        }
    },[])
    useEffect(()=>{
        console.log(state);
    },[state])
  return <div>
    <p>{state ? "Es true" : "Es false"}</p>

    <button onClick={()=>{
        setState(!state)
    }}>
        cambiar state

    </button>
    
    </div>
}
