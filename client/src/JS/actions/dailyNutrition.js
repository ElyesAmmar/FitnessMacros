import { DELETE_FOOD, GET_FOOD_DAILY, GET_DAILY_NUTRITION, GET_MEALS_DATA, SAVE_FOOD } from '../constant/actionsTypes'
import axios from 'axios'


export const getUserNutrition = (id) => async(dispatch) => {
    try {
        if (id) {
            const  nutrition = await axios.get(`http://localhost:7001/api/daily_nutrition/get/${id}`);
            dispatch({
                type: GET_DAILY_NUTRITION,
                payload: nutrition.data.response
            })
        }
    } catch (error) {
        console.log(error);
        alert(error.response.data.msg)
    }
}

// save food on the localstorage
export const saveFood = (meal, food) => {
    console.log(food);
    let existingData = JSON.parse(localStorage.getItem('Meals')) || 
    {
        breakfast:[],
        lunch: [],
        dinner: [],
        snacks: []
    };
    const existingFood = existingData[meal].find((item)=> item.nameFood === food.nameFood);
    console.log('existingFood', existingFood);
    if (existingFood) {
        existingFood.multiplier += food.multiplier;
        existingFood.carbohydrates += food.carbohydrates;
        existingFood.protein += food.protein;
        existingFood.fat += food.fat;
    } else {
        existingData[meal].push(food);
    }
    localStorage.setItem('Meals', JSON.stringify(existingData));
    return({
        type: SAVE_FOOD,
    })
}

// get meals from the local storage
export const getFoodDaily = () => {
    const consumes = JSON.parse(localStorage.getItem('Meals')); 
    console.log('consumes',consumes);
    return ({
        type: GET_FOOD_DAILY,
        payload: consumes
    })
}

export const getMealsData = (meals) => {
    console.log('meals',meals);
    return({
        type: GET_MEALS_DATA,
        payload:meals
    })
}


export const deleteFood = (meal,index) => (dispatch) => {
    console.log('inedexx', meal,index);
    let existingData = JSON.parse(localStorage.getItem('Meals')); 
    console.log(existingData);
    existingData[meal].splice(index, 1);
    localStorage.setItem('Meals', JSON.stringify(existingData));
    dispatch(getFoodDaily());
    return({
        type: DELETE_FOOD,
    })
}