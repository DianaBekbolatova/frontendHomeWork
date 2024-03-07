import React, {useState} from 'react'
import Tables from './components/Tables'
import Filter from './components/Filter'
import NewShop from './components/NewShop'

import './Main.css'

export default function Main() {
  const [shops, setShops] = useState([
    {
      "name": "Adidas",
      "openingTime": "09:00",
      "distance": "4 км",
      "pay": "Карта, QR"
    },
    {
      "name": "BeFree",
      "openingTime": "10:00",
      "distance": "5 км",
      "pay": "Карта, наличные"
    },
    {
      "name": "Ostin",
      "openingTime": "09:00",
      "distance": "2 км",
      "pay": "Карта, QR, наличные"
    },
    {
      "name": "Colin`s",
      "openingTime": "11:00",
      "distance": "3 км",
      "pay": "Карта"
    }
  ]);

  let[ifSearch, setIfSearch] = useState(shops)

  let search  = (toSearch)=>{
    let filter = shops.filter(shop=>
      shop.name.toLowerCase().includes(toSearch.toLowerCase())
      )
      setIfSearch(filter)
  }

  const addShop = (newShop) => {
    setShops([...shops, newShop]);
  };
  return (
    <div>
      <Filter ifSearch={search}></Filter>
      <Tables shops={ifSearch}></Tables>
      <NewShop addShop={addShop}></NewShop>
    </div>
  )
}
