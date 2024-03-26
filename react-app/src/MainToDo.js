import React from 'react'
import Cards from './components/Cards'
import DarkContextClass from './components/LightDark/DarkContext'
import TextContextClass from './components/Text/TextContext'
import ContForImage from './components/LightDark/ContForImageDark'
import ContForImageText from './components/Text/ContForImageText'

import './Main.css'
import Header from './components/Header/Header'
import InfoMagazine from './components/InfoMagazine'
import Contacts from './components/Contacts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Main() {
  return (
    <div>

<BrowserRouter>
          <Header></Header>
          <DarkContextClass>
        <TextContextClass>
       
          <ContForImage></ContForImage>
          <ContForImageText></ContForImageText>
        </TextContextClass>
      </DarkContextClass>
          <Routes>
          <Route path='/' element={<Cards></Cards>}></Route>
          <Route path='info' element={<InfoMagazine></InfoMagazine>}></Route>
          <Route path='contacts' element={<Contacts></Contacts>}></Route>
          </Routes>
          
          </BrowserRouter>
      
    </div>
  )
}
