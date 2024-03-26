import React, { createContext, useEffect, useState } from 'react'

const TextContext = createContext()
export default function TextContextClass(props) {
    
    const [textMode, setTextTheme] = useState(false)

    useEffect(()=>{
        if(textMode){
            document.body.classList.add('font-cursive')
        }else{
            document.body.classList.remove('font-cursive')
        }
    }, [textMode])

    const addTextMode = ()=>{
        setTextTheme(!textMode)
    }
  return (
    <div>
        <TextContext.Provider value={{textMode, addTextMode}}>
            {props.children}
        </TextContext.Provider>
    </div>
  )
}
 export {TextContext}