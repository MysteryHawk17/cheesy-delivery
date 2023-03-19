import axios from "axios";
export const registerUser=(user)=>async dispatch=>{
    dispatch({type:"USER_REGISTER_REQUEST"});
    try {
        const response=await axios.post('http://localhost:5000/api/auth/register',user)
        dispatch({type:"USER_REGISTER_SUCCESS",payload:response.status});
        console.log(response)
    } catch (error) {
        console.log("Error in registering user")
        console.log(error)
        dispatch({type:"USER_REGISTER_FAILURE",payload:error})
    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:"USER_LOGIN_REQUEST"});
    try {
        const response=await axios.post('http://localhost:5000/api/auth/login',user)
        dispatch({type:"USER_LOGIN_SUCCESS",payload:response});


        console.log(response)
    } catch (error) {
        console.log("Error in registering user")
        console.log(error)
        dispatch({type:"USER_LOGIN_FAILURE",payload:error})
    }
}

export const logoutUser=()=> dispatch =>{
    localStorage.removeItem('logininfo')
   
}
