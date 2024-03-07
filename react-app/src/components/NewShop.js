import React, { useState } from 'react'

export default function NewShop({ addShop }) {
  let [newShops, setNewShops] = useState({
    name: '',
    openingTime: '',
    distance: '',
    pay: ''
  })

  let [isModal, setIsModal] = useState(false)

  let modal = () => {
    setIsModal(!isModal)


  }

  let saveShop = ((event) => {
    let { name, value } = event.target
    setNewShops(beforeShops => ({
      ...beforeShops,
      [name]: value
    }))
  })

  let saveShopSubmit = ((event) => {
    event.preventDefault()
    addShop(newShops)
    setNewShops({
      name: '',
      openingTime: '',
      distance: '',
      pay: ''
    })
    modal()
  })
  return (
    <div>
      <button type='button' className='addShopBtn' onClick={modal} >Добавить новый магазин</button>

      {isModal && (
        <div className='container'>
          <div className='modal'>
            <h3>Добавление нового магазина</h3>
            <form onSubmit={saveShopSubmit}>
              <label className='inNewShop'>
                Имя магазина: <input type='text' name='name' value={newShops.name} onChange={saveShop}></input>
              </label>

              <label className='inNewShop'>
                Время открытия магазина: <input type='text' name='openingTime' value={newShops.openingTime} onChange={saveShop}></input>
              </label>

              <label className='inNewShop'>
                Удаленность от центра доставки: <input type='text' name='distance' value={newShops.distance} onChange={saveShop}></input>
              </label>

              <label className='inNewShop'>
                Метод оплаты: <input type='text' name='pay' value={newShops.pay} onChange={saveShop}></input>
              </label>

              <button type='submit'>Добавить</button>
            </form>

          </div>
        </div>
      )}


    </div>
  )
}
