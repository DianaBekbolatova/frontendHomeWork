import React from 'react'

export default function ElementList({ item, delItem, index, checkToDo }) {


  return (
    <div className='todoLists'>
      <div className='toDoItem'>
        <p style={{ color: item.done ? 'black' : 'red' }}>{item.todo}</p>
        <input type='checkbox' checked={item.done} onChange={() => checkToDo(index)}></input>
        <button onClick={() => delItem(item.id)}>Удалить</button>
      </div>
    </div>
  )
}
