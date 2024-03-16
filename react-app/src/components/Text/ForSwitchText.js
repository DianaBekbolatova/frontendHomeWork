import React, { useContext } from 'react'
import {TextContext} from './TextContext'

export default function ForSwitchText() {
    const {textMode, addTextMode} = useContext(TextContext)
    const imgClick = ()=>{
        addTextMode()
    }
  return (
    <div className='for-switch'>
      <img src={textMode ? `/imgs/cursive.png` : `/imgs/basic.png`} onClick={imgClick} className='imgs-switch'></img>
    </div>
  )
}
