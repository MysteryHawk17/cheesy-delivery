import React from 'react'
import CartItem from '../../components/Cart Items/CartItem'
import './cart.css'
import { useDispatch,useSelector } from 'react-redux'
const Cart = () => {
  const cartState=useSelector(state=>state.cartReducer)
  const {cartItems}=cartState
  var subtotal= cartItems.reduce((x,item)=>{
    return(x+item.price)
  },0)
  console.log(subtotal)
  return (
    <div className='cartpage'>
        <div className="cartitems">
            <h2>My Cart</h2>
            {/* <CartItem/>
            <CartItem/>
            <CartItem/> */}
            {
              cartItems?.map((pizza)=>{
                return(
                  <CartItem pizza={pizza} />
                  // console.log(pizza)
                )
              })
            }
        </div>
        <div className="subTotal">
            <h2>SubTotal = {subtotal} /-</h2>
            <button>
                Pay Now
            </button>
        </div>
    </div>
  )
}

export default Cart