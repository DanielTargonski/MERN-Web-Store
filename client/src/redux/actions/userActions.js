import * as actionTypes from "../typeDefs/userConstants";
import axios from "axios";

// export async function registerUser(){
//     try{
//       const userToCreate = {username: user.username, email: user.email, password: user.password}
//       const data = await axios.post('/api/register', userToCreate)
//       console.log(userToCreate)
//     }catch(error){
//       console.error(error)
//     }
//   }

export const registerUser = (username,email,password) => async (dispatch) => {
    try{
        console.log({username, email, password})
        console.log(dispatch)
        const { data } = await axios.post("http://localhost:5000/api/register", {username, email, password})
        console.log(data)
        // dispatch({
        //     type: actionTypes.REGISTER_USER
        // })
    }catch(error){
        console.error(error)
    }
}

export const loginUser = (username, password) => async (dispatch) => {
    try {
        const { data } = await axios.post("http://localhost:5000/api/login", { username, password })
        localStorage.setItem("token",data);
    } catch (err) {
        console.error(err);
    }
}

export const setUsername = (username) => (dispatch) => {
    dispatch({
        type: actionTypes.SET_USERNAME,
            username
    })
} 
export const setPassword = (password) => (dispatch) =>{
    dispatch({
        type: actionTypes.SET_PASSWORD,
            password
    })
}
export const getUser = () => (dispatch, getState) => {
    dispatch({
        type: actionTypes.GET_USER
    })
}
export const setEmail = (email) => (dispatch) =>{
    dispatch({
        type: actionTypes.SET_EMAIL,
            email
    })
}




