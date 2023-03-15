export const addToCart=(pizza,quantity,varient)=>(dispatch,getState)=>{


    var cartItem={
        name:pizza.name,
        image:pizza.image.filePath,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity

    }
    dispatch({type:"ADD_TO_CART",payload:cartItem})
    const cartItems=getState().cartReducer.cartItems
    console.log(cartItems)
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}