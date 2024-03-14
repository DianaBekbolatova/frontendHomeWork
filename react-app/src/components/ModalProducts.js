import React, { useState, useRef } from 'react'

export default function ModalProducts({ addProduct }) {
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const titleRef = useRef(null)
  const brandRef = useRef(null)
  const descRef = useRef(null)
  const rateRef = useRef(null)
  const priceRef = useRef(null)
  const imgRef = useRef(null)

  const formSubmit = (event) => {
    event.preventDefault()
    const newProduct = {
      id: Math.random(),
      title: titleRef.current.value,
      brand: brandRef.current.value,
      description: descRef.current.value,
      rating: rateRef.current.value,
      price: priceRef.current.value,
      image: imageUrl,
    }
    addProduct(newProduct)
  }

  const changeImg = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setImageUrl(URL.createObjectURL(file))
  }

  return (
    <div className='forModal'>
      <button onClick={() => setModal(!modal)}>Добавить товар</button>
      {modal && (
        <div className='modal-back'>
          <div className='modal-cont'>
            <form onSubmit={formSubmit}>
              <label>Название<br />
                <input type='text' placeholder='Введите название товара' ref={titleRef} />
              </label>
              <br />
              <label>Бренд<br />
                <input type='text' placeholder='Введите бренд товара' ref={brandRef} />
              </label>
              <br />
              <label>Описание<br />
                <textarea placeholder='Добавьте описание товара' ref={descRef} />
              </label>
              <br />
              <label>Стоимость<br />
                <input type='text' placeholder='Введите цену' ref={priceRef} />
              </label>
              <br />
              <label>Рейтинг<br />
                <input type='text' ref={rateRef} />
              </label>
              <br />
              <label>
                Фото<br/>
                <input type='file' accept='image/*' onChange={changeImg} ref={imgRef} />
              </label>
              <br/>
              {imageUrl && (
                <img src={imageUrl} style={{width:'120px', height:'120px'}}/>
              )}
              <br/>
              <button type='submit'>Создать</button>
              <button onClick={() => setModal(false)}>Назад</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
