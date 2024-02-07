import { GET_DAILY_NUTRITION } from '../constant/actionsTypes'
import axios from 'axios'


export const getUserNutrition = (id) => async(dispatch) => {
    try {
        const  response = await axios.get(`http://localhost:7001/api/daily_nutrition/get/${id}`);
        dispatch({
            type: GET_DAILY_NUTRITION,
            payload: response.data.response
        })
    } catch (error) {
        console.log(error);
        alert(error.response.data.msg)
    }
}