import axios from 'axios';
import { DELETE_FOOD, GET_FOOD_BY_NAME, LOAD_FOOD, SAVE_FOOD } from '../constant/actionsTypes';

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

export const saveFood = (meal, food) => {
    let existingData = JSON.parse(localStorage.getItem('Meals')) || 
    {
        breakfast:[],
        lunch: [],
        dinner: [],
        snacks: []
    };
    existingData[meal].push(food);
    localStorage.setItem('Meals', JSON.stringify(existingData));
    console.log(meal, food);
    return({
        type: SAVE_FOOD,
    })
}
export const deleteFood = (Meals, index) => {
    let existingData = JSON.parse(localStorage.getItem('Meals')); 
    existingData.splice(index, 1);
    localStorage.setItem(Meals, JSON.stringify(existingData));
    return({
        type: DELETE_FOOD,
    })
}