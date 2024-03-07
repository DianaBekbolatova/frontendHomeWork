import React from 'react'

export default function Tables({ shops }) {
  return (
    <div className='tablesCont'>
      <table>
        <thead>
          <tr>
            <th> Имя магазина</th>
            <th> Открытие магазина</th>
            <th> Расстояние</th>
            <th> Способы оплаты</th>
          </tr>
        </thead>
        <tbody>
          {shops.map((shop, i) => {
            return(
              <tr key={i}>
              <td>{shop.name}</td>
              <td>{shop.openingTime}</td>
              <td>{shop.distance}</td>
              <td>{shop.pay}</td>
            </tr>
            )
          
          })}
        </tbody>
      </table>
    </div>

  )
}
