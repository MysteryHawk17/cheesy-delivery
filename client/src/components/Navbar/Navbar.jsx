import React from 'react'
import './navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <h3>Cheesy Pizza</h3>
        </div>
        <div className="options">
          <h3>Login</h3>
          <div className="cart">
            <AiOutlineShoppingCart className='icon' />
            <p className='quantity'>4</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar