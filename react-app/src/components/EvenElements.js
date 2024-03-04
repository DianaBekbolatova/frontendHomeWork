import React from 'react'

export default function EvenElements({ products }) {
  return (
    <div><p>Отрисовка четных элементов:</p>

    {  products.map((product) => {
        if (product.id % 2 === 0) {
          if(product.name === 'Банан'){
            return(<p key={product.id} className='banana' style={{color: 'yellow', fontStyle: 'italic'}}>Продукт-{product.id}: {product.name}</p>)
          }else{
            return(<p key={product.id} style={{fontStyle: 'italic'}}>Продукт-{product.id}: {product.name}</p>)
          }
         
        }
        return null
        })}
       
      
    </div>
  )
}
