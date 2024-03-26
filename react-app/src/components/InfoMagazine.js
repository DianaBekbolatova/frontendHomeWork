import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function InfoMagazine() {
    const nav = useNavigate()
  return (
    <div className='infoMagazine'>
        <button onClick={()=>nav('/')} className='buyCard'>Назад</button>
        <h2>Магазин электроники</h2>
        <p>Мы - ваш надежный партнер в мире высококачественной электроники. С гордостью предлагаем нашу продукцию по доступным ценам</p>
        <ul>Наш ассортимент:
        <li>Смартфоны</li>
        <li>Ноутбуки</li>
        <li>Планшеты</li>
        <li>Бытовая техника</li>
       
        </ul>

        <p>Наш адрес: г.Астана, ул. Уральская 5</p>
    </div>
  )
}
