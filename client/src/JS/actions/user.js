import { ADD_USER_DATA, USER_REGISTER, USER_GET_AUTH } from '../constant/actionsTypes'
import axios from 'axios'

export const register = (user) => async(dispatch) => {
    try {
        console.log('user from reducer', user);
        const userRes = await axios.post('/api/users/register', user);
        console.log(userRes);
        const userNutritionRes = await axios.post('/api/daily_nutrition/post', userRes.data.user);
        
        dispatch({
            type: USER_REGISTER,
            payload: {user: userRes.data, userNutrition: userNutritionRes.data}
        });
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
            payload: user.data
        })

    } catch (error) {
        console.log(error);
        alert(error.response.data.msg);
    }
}
    