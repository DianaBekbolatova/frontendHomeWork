import React, { useEffect, useState } from 'react'
import ModalProducts from './ModalProducts'

export default function Cards() {
  const [cards, setCards] = useState([])

  const getCards = async () => {
    const resp = await fetch('https://dummyjson.com/products/category/smartphones')
    const data = await resp.json()
    if (Array.isArray(data)) {
      setCards(data.products)
    } else {
      setCards(Object.values(data.products))
    }
  }

  useEffect(() => {
    getCards()
  }, [])



  //filter
  const [filter, setFilter] = useState('default')
  const [filteredCards, setFilteredCards] = useState([])

  useEffect(() => {
    if (filter === 'highToLow') {
      setFilteredCards([...cards].sort((a, b) => b.price - a.price))
    } else if (filter === 'lowToHigh') {
      setFilteredCards([...cards].sort((a, b) => a.price - b.price))
    } else {
      setFilteredCards([...cards])
    }
  }, [filter, cards])
  const addProduct = (newProduct) => {
    setCards([...cards, newProduct])
  }

  return (
    <div className='all'>
    
      <div className='header'>
        <div className='titles-all'>
        <h3>Смартфоны в Астане</h3>
        <p className='titleCard'>Найдено {cards.length} товаров</p>
        </div>
   <div className='filter-cards'>
    <select value={filter} onChange={(event) => setFilter(event.target.value)} className='filter-cards' required>
          <option value='default' selected disabled></option>
          <option value='highToLow'>Сначала дорогие</option>
          <option value='lowToHigh'>Сначала дешевые</option>
        </select>  
   </div>
       
      </div>
      <div className='cards-container'>
        {filteredCards.map(card => (
          <div key={card.id} className='card-cont'>
            <div className='img-cont'>
              {card.image ? (
                <img src={card.image} alt="Product" />
              ) : (
                card.images && card.images.length > 0 && (
                  <img src={card.images[0]} alt="Product" />
                )
              )}
            </div>
            <p className='titleCard'>Смартфон {card.brand} {card.title}</p>
            <p className='desCard'>{card.description}</p>
            <p className='rateCard'>☆ {card.rating}</p>
            <p className='priceCard'>$ {card.price}</p>
            <button className='buyCard'>В корзину</button>
          </div>
        ))}
      </div>
      <ModalProducts addProduct={addProduct} />
    </div>
  )
}
