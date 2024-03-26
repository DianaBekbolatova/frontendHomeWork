import React, { createContext, useEffect, useState } from 'react'

const DarkContext = createContext()
export default function DarkContextClass(props) {
    
    const [darkTheme, setDarkTheme] = useState(false)

    useEffect(()=>{
        if(darkTheme){
            document.body.classList.add('cont-dark')
            
        }else{
            document.body.classList.remove('cont-dark')
        }
    }, [darkTheme])

    const addDarkMode = ()=>{
        setDarkTheme(!darkTheme)
    }
  return (
    <div>
        <DarkContext.Provider value={{darkTheme, addDarkMode}}>
            {props.children}
        </DarkContext.Provider>
    </div>
  )
}
 export {DarkContext}