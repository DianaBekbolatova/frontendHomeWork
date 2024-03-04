import React from 'react'

export default function Main({products}) {
    
    return (
        <div><p>Отрисовка всех продуктов:</p>{products.map((product) => <p key={product.id}>Продукт-{product.id}: {product.name}</p>)}</div>
    )
}
