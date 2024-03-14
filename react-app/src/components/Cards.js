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
  };

  useEffect(() => {
    getCards();
  }, []);

  const addProduct = (newProduct) => {
    setCards([...cards, newProduct])
  };

  return (
    <div className='all'>
      <h3>Смартфоны в Астане</h3>
      <p className='titleCard'>Найдено {cards.length} товаров</p>
      <div className='cards-container'>
        {cards.map(card => (
          <div key={card.id} className='card-cont'>
            <div className='img-cont'>
              {card.image ? (
                <img src={card.image} />
              ) : (
                card.images && card.images.length > 0 && (
                  <img src={card.images[0]} />
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
  );
}
