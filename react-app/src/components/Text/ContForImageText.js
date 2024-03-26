import React, { useContext } from 'react'
import {TextContext} from './TextContext'
import ForSwitchText from './ForSwitchText'

export default function ContForImageText() {
    const {textMode} = useContext(TextContext)

  return (
    <div className={textMode ? `ContForImageText font-cursive` : `ContForImageText font-basic`}> 
          <ForSwitchText></ForSwitchText>
    </div>
  )
}
