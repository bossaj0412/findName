import React from 'react'
import './Searchbox.css'
const  Searchbox = ({search}) => {
  return (
    <div className='search-container'>
        <input  onChange={(e)=> search(e) } placeholder='Type keyword' className='input' />
    </div>
  )
}

export default Searchbox