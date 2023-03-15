import { combineReducers } from "redux";
import {configureStore ,applyMiddleware} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension"
import { getAllPizzaReducer } from "./reducers/pizzaReducers";


const finalReducer=combineReducers({
    getAllPizzaReducer:getAllPizzaReducer
})
const initialState={}
const composeEnhancers=composeWithDevTools({})
const store=configureStore(
    {
        reducer:finalReducer
        
    }
)

export default store