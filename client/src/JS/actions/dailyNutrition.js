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

    const breakfast = consumes.breakfast.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const lunch = consumes.lunch.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const dinner = consumes.dinner.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const snacks = consumes.snacks.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });
    
    const totalMacros = Object.values(consumes).reduce((accumulator, element)=> {
        element.forEach((el)=> {
            accumulator.calories += el.calories;
            accumulator.carbohydrates += el.carbohydrates;
            accumulator.protein += el.protein;
            accumulator.fat +=  el.fat;
        });
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    console.log('consumes',consumes);
    return ({
        type: GET_FOOD_DAILY,
        payload: {breakfast, lunch, dinner, snacks, totalMacros, foods: consumes}
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