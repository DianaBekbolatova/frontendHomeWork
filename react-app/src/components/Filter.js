import React, { useState } from 'react'

export default function Filter({ifSearch}) {
  let [search, setSearch] = useState('')

  let ifSubmit = (event)=>{
   ifSearch(event.target.value)
   setSearch(event.target.value)
  }
  return (
    <div>
      <form>
        <input type='text' className='inSearch' placeholder='Поиск'  value={search} onChange={ifSubmit}></input>
      </form>
    </div>
  )
}
