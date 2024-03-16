import React, { useContext } from 'react'
import {DarkContext} from './DarkContext'
import ForSwitch from './ForSwitch'

export default function ContForImage() {
    const {darkTheme} = useContext(DarkContext)

  return (
    <div className={darkTheme ? `ContForImage cont-dark` : `ContForImage cont-light`}> 
          <ForSwitch></ForSwitch>
    </div>
  )
}
