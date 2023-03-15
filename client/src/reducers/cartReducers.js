export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case"ADD_TO_CART":return{
            //cartItems:action.payloadit overrides the initial cart itemms in this case to we needto use ...,
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
        default: return state
    }
}