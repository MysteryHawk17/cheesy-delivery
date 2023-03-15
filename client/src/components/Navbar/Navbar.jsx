import React from 'react'
import './navbar.css'
import { useSelector,useDispatch } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
const Navbar = () => {
  const dispatch=useDispatch();
  const cartState=useSelector(state=>state.cartReducer)
  const{cartItems}=cartState;
  console.log(cartItems)
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
            <p className='quantity'>{cartItems.length}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar