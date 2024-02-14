import axios from 'axios';
import { GET_FOOD_BY_NAME, LOAD_FOOD } from '../constant/actionsTypes';

export const getFood = (name) => async(dispatch)=> {
    dispatch(loadingFood());
    try {
        console.log(name);
        const response = await axios.get('http://localhost:7001/api/food/getfoods', {params :{name}});
        console.log(response.data);
        dispatch({
            type: GET_FOOD_BY_NAME,
            payload: response.data.response        
        })
    } catch (error) {
        console.log(error);
    }
}

export const loadingFood = () => {
    return({
        type: LOAD_FOOD,
    })
}