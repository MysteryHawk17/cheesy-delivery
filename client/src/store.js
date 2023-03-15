import { combineReducers } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import { getAllPizzaReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducers";


const finalReducer=combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,
    cartReducer:cartReducer
})
const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[];

const initalState={
    cartReducer:{
    cartItems:cartItems
}}
const store=configureStore(
    {
        reducer:finalReducer,
        preloadedState:initalState
    }
)

export default store