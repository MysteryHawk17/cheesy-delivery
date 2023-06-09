export const placeOrderReducer=(state={},action)=>{
    switch(action.type){
        case 'PLACE_ORDER_REQUEST':return{
            loading:true
        }
        case'PLACE_ORDER_SUCCESS':return{
            loading:false,
            success:true,
            data:action.payload
        }
        case'PLACE_ORDER_FAILURE':return{
            loading:false,
            success:false,
            error:action.payload
        }
        default:return state
    }
}