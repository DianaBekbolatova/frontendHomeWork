import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Header() {
    const location = useLocation()
    return (
        <div className='headerMain'> 
            <div className='links'>
            <Link to={'/'} className={location.pathname == '/' ? 'active' : 'non-active'} style={{textDecoration: 'none'}}>Главная страница</Link>
            <Link to={'/info'} className={location.pathname == '/info' ? 'active' : 'non-active'} style={{textDecoration: 'none'}}>Описание магазина</Link>
            <Link to={'/contacts'} className={location.pathname == '/contacts' ? 'active' : 'non-active'} style={{textDecoration: 'none'}}>Контакты</Link>
           </div>
        </div>
    )
}
