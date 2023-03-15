import axios from "axios"

export const getPizza=()=>async dispatch=>{
    try {
        dispatch  ({type:"GET_PIZZA_REQUEST"})
        
        const response=await axios.get("http://localhost:5000/api/pizza/getallpizza");
      
        dispatch({type:"GET_PIZZA_SUCCESS",payload:response.data.pizza})
    } catch (error) {
        console.log("Error in getting pizzas")
        console.log(error)
        dispatch({type:"GET_PIZZA_FAILED",payload:error})
    }
}