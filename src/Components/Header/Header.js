import React from 'react'
import './Header.css'
const Header = ({change}) => {
  console.log(change);
  return (
    <div className='head-container' > 
      <img src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' alt='ajeet' className={`head-image  head-img-${change}` }/>

    <h1 className={`head-text head-text-${change}`}> Name It! </h1>

    </div>
  )
}

export default Header