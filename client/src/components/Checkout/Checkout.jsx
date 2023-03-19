import React from 'react'
import './checkout.css'
import StripeCheckout from 'react-stripe-checkout'
import { useSelector,useDispatch } from 'react-redux'
import { placeorder } from '../../actions/orderActions'
const Checkout = ({ subtotal }) => {
    const dispatch=useDispatch();
    const loginState=useSelector(state=>state.loginUserReducer)
    const {logininfo}=loginState
    const currentuser=logininfo[0].user

    const tokenhandler = (token) => {
        console.log(token)
        dispatch(placeorder(token,subtotal,currentuser))
    }
    
    return (
        <div>
            <StripeCheckout
                amount={subtotal*100}
                name='Cheesy Delivery'
                email={currentuser.email}
                shippingAddress
                billingAddress
                description={`Your payable amount is ${subtotal}`}
                panelLabel="Pay Now"
                token={tokenhandler}
                currency='INR'
                stripeKey='pk_test_51MnMofSD3IHGeKMnVjKQzfddyrMNQ6owWfPOzLKFPJuBNd1qXHiICM4cjWApKM1YIS22ZTujr3qmEoRRZFxyBKlS00Idu6E3Op'
            >
                <button>
                    Pay Now
                </button>
            </StripeCheckout>
        </div>
    )
}

export default Checkout