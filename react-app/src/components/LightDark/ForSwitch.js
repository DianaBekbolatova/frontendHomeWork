import React, { useContext } from 'react'
import {DarkContext} from './DarkContext'

export default function ForSwitch() {
    const {darkTheme, addDarkMode} = useContext(DarkContext)
    const imgClick = ()=>{
        addDarkMode()
    }
  return (
    <div className='for-switch'>
      <img src={darkTheme ? `/imgs/dark.png` : `/imgs/white.png`} onClick={imgClick} className='imgs-switch'></img>
    </div>
  )
}
