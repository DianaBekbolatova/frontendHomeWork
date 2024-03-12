import React, { useState, useEffect } from 'react'
import ElementList from './ElementList'

export default function ToDoList() {
  const [list, setList] = useState([])
  const [inToDo, setInToDo] = useState('')

  const getData = async () => {
    const arr = []
    let data = await import('./database.json')
    for (let i = 0; i < data.length; i++) {
      arr.push(data[i])
    }
    setList(arr)
  }

  useEffect(() => {
    getData()
  }, [])

  const delItem = (id) => {
    console.log(id)
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  const checkToDo = (id) => {
    const newToDo = [...list]
    newToDo[id].done = !newToDo[id].done
    setList(newToDo)
  }

  const formSubmit = (event) => {
    event.preventDefault()
    addToDo()
  }

  const addToDo = () => {

    if (inToDo.trim() !== '') {
      const newItem = {
        id: list.length + 1,
        todo: inToDo,
        done: false
      }
      setList([...list, newItem])
      setInToDo('')
    }
  }

  const inpOnChange = (event) => {
    setInToDo(event.target.value)
  }
  return (
    <div className='allForm'>
      <h1>Список дел на Реакте</h1>
      <form onSubmit={formSubmit}>
        <input type='text' onChange={inpOnChange} placeholder='Добавьте в список новое дело'></input>
        <button type='submit'>Добавить</button>
      </form>

      {list.map((item, index) => <ElementList key={item.id} item={item} delItem={delItem} index={index} checkToDo={checkToDo}></ElementList>)}

    </div>

  )
}
