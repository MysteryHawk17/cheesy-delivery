import React from 'react'
import "./order.css"
const Order = ({ order }) => {
  console.log(order)
  const{details,subtotal,orderStatus,address}=order
  console.log(address)
  return (
    <div className='orderr'>

      <div className="orderItems">
        <h3>Items Ordered</h3>
        {details?.map((e)=>{
          return(<div className="orderItem">
          <img className='orderItemImg' src={e.image} alt="" />
          <p className='pizzaName'>{e.name}[ {e.varient} ] x {e.quantity} = {e.price}</p>
        </div>)
        })}
        

      </div>
      <div className="deliveryAddress">
        <h3>Delivery Address</h3>
        <div className='address'>
          <p>{address.address}</p>
          <p>{address.city}</p>
          <p>{address.country}</p>
          <p>{address.pincode}</p>
        </div>
      </div>
      <div className="prices">
        <h3>Payment Details</h3>
        <p>Price : {subtotal}</p>
        <p>Order Status :{orderStatus ? "Placed" : "Failed"}</p>
        <p>Date : 2021-04-10</p>

      </div>


    </div>
  )
}

export default Order