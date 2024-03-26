import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contacts() {
    const nav = useNavigate()
  return (
    <div className='infoMagazine'>
        <button onClick={()=>nav('/')} className='buyCard'>Назад</button>
        <h2>Контакты</h2>
        <p>Телефон: 8 775 007 77 57</p>
        <p>Часы работы: 10:00 - 19:00<br></br>без выходных</p>
    </div>
  )
}
