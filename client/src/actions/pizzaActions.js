import axios from "axios"

export const getPizza=()=>async dispatch=>{
    // dispatch  ({type:"GET_PIZZA_REQUEST"})
    try {
        dispatch  ({type:"GET_PIZZA_REQUEST"})
        // console.log('in get pizza call')
        const response=await axios.get("http://localhost:5000/api/pizza/getallpizza");
        // console.log('gettin respo');
        // console.log(response.data)
       
        dispatch({type:"GET_PIZZA_SUCCESS",payload:response.data.pizza})
    } catch (error) {
        console.log("Error in getting pizzas")
        console.log(error)
        dispatch({type:"GET_PIZZA_FAILED",payload:error})
    }
}