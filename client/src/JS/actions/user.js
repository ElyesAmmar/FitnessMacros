import { USER_LOGIN, USER_REGISTER, USER_GET_AUTH, USER_LOGOUT, UPDATE_USER, LOAD_UPDATE_USER, DELETE_USER } from '../constant/actionsTypes'
import axios from 'axios';
import { getUserNutrition } from './dailyNutrition';

export const register = (user) => async(dispatch) => {
    try {
        console.log('user from reducer', user);
        const userRes = await axios.post('http://localhost:7001/api/users/register', user);
        console.log(userRes);
        const userNutritionRes = await axios.post('http://localhost:7001/api/daily_nutrition/post', userRes.data.user);
        dispatch({
            type: USER_REGISTER,
            payload: userRes.data
        });
    } catch (error) {
        console.log(error);
        alert(error.response.data.msg);
    }
}
export const login = (user) => async(dispatch) => {
    try {
        const userRes = await axios.post('http://localhost:7001/api/users/login', user);
        dispatch({
            type: USER_LOGIN,
            payload: userRes.data
        })
    } catch (error) {
        console.log(error);
        alert(error.response.data.msg);
    }
}
export const getUser = () => async(dispatch) =>{
    try {
        const config = {
            headers : {
                "x-auth-token": localStorage.getItem('token')
            }
        }
        if (config.headers["x-auth-token"]) {
            const user  = await axios.get('http://localhost:7001/api/users/', config);
            dispatch({
                type: USER_GET_AUTH,
                payload: user.data.response
            })
        }
    } catch (error) {
        console.log(error);
        alert(error.response.data);
    }
}
export const updateUser = (id,data) => async(dispatch) => {
    dispatch(loadUpdateUser());
    
    console.log(id,data);
    try {
        const response = await axios.put(`http://localhost:7001/api/users/update/${id}`, data);
        const userNutritionRes = await axios.post('http://localhost:7001/api/daily_nutrition/post', response.data.user);
        dispatch({
            type: UPDATE_USER,
            payload: response.data.msg
        })
        dispatch(getUser());
        dispatch(getUserNutrition(id));
    } catch (error) {
        console.log(error);
        alert(error.response.data);
    }
}
export const deleteUser = (id) => async(dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:7001/api/users/delete/${id}`);
        dispatch({
            type: DELETE_USER,
            payload: response.data
        })
    } catch (error) {
        console.log(error);
        alert(error.response.data);
    }
}

export const loadUpdateUser = () => {
    return({
        type: LOAD_UPDATE_USER
    })
}
export const logOut = () => {
    return ({
        type: USER_LOGOUT
    })
}
