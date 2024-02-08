import { USER_LOGIN, USER_REGISTER, USER_GET_AUTH } from '../constant/actionsTypes'
import axios from 'axios'

export const register = (user) => async(dispatch) => {
    try {
        console.log('user from reducer', user);
        const userRes = await axios.post('http://localhost:7001/api/users/register', user);
        console.log(userRes);
        const userNutritionRes = await axios.post('http://localhost:7001/api/daily_nutrition/post', userRes.data.user);
        
        dispatch({
            type: USER_REGISTER,
            payload: userRes.data.user
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
            payload: userRes.data.user
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
        console.log(config);
        const user  = await axios.get('http://localhost:7001/api/users/', config);
        dispatch({
            type: USER_GET_AUTH,
            payload: user.data.response
        })

    } catch (error) {
        console.log(error);
        alert(error.response.data);
    }
}