import axios from "axios"

export const placeorder=(token,subtotal,currentuser)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    
    const cartitems=getState().cartReducer.cartItems;

    try {
        const response=await axios.post("http://localhost:5000/api/order/payment",{token,subtotal,currentuser,cartitems})
        dispatch({type:"PLACE_ORDER_SUCCESS",payload:response.status})
        console.log(response)

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