import axios from "axios"
import { useNavigate } from "react-router-dom";

export const placeorder=(token,subtotal,currentuser,navigate)=>async(dispatch,getState)=>{
    
    dispatch({type:"PLACE_ORDER_REQUEST"})
    
    const cartItems=getState().cartReducer.cartItems;
    
    try {
        const response=await axios.post("https://cheesy-delivery-api.vercel.app/api/order/payment",{token,subtotal,currentuser,cartItems})
        dispatch({type:"PLACE_ORDER_SUCCESS",payload:response.data})
        console.log(response)
        navigate("/profile")

    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILURE",payload:error})
        console.log("Payment error occured")
        console.log(error)
    }

}


/*
endpoints will be like /order/payment
/order/history

*/