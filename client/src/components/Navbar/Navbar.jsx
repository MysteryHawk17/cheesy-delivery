import React from 'react'
import './navbar.css'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  // const dispatch=useDispatch();
  const cartState=useSelector(state=>state.cartReducer)
  const{cartItems}=cartState;
  // console.log(cartItems)
  const navigate=useNavigate()
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo"
         onClick={()=>{
          navigate("/")
        }}
        >
          <h3>Cheesy Pizza</h3>
        </div>
        <div className="options">
          <h3>Login</h3>
          <div className="cart">
            <AiOutlineShoppingCart className='icon'
            onClick={()=>{
              navigate("/cart")
            }}
            />
            <p className='quantity'>{cartItems.length}</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar