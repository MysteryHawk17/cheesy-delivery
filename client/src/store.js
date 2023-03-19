import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { getAllPizzaReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducers";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducers";


const finalReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer
})
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const logininfo = localStorage.getItem('logininfo') ? JSON.parse(localStorage.getItem('logininfo')) : [];
// console.log(cartItems)
const initalState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer:{
        logininfo:logininfo
    }
}
// console.log(
//     initalState
// )
const store = configureStore(
    {
        reducer: finalReducer,
        preloadedState: initalState
    }
)

export default store