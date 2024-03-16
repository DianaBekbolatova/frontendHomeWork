import React from 'react'
import Cards from './components/Cards'
import DarkContextClass from './components/LightDark/DarkContext'
import TextContextClass from './components/Text/TextContext'
import ContForImage from './components/LightDark/ContForImageDark'
import ContForImageText from './components/Text/ContForImageText'

import './Main.css'

export default function Main() {
  return (
    <div>

      <DarkContextClass>
        <TextContextClass>
          <ContForImage></ContForImage>
          <ContForImageText></ContForImageText>
          <Cards></Cards>
        </TextContextClass>
      </DarkContextClass>
    </div>
  )
}
