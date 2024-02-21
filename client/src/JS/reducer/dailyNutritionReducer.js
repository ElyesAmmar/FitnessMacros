import { GET_DAILY_NUTRITION, GET_MEALS_DATA, SAVE_FOOD, GET_FOOD_DAILY } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    dailyNutrition: {},
    meals: {},
    errors: {},
    foodDaily: {},
    msg: ''
}


export const dailyNutritionReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case GET_DAILY_NUTRITION:
            return {...state, dailyNutrition: payload};
        case SAVE_FOOD:
            return {...state, meals: payload};
        case GET_MEALS_DATA:
            return {...state, meals: payload};
        case GET_FOOD_DAILY:
            return {...state, foodDaily: payload};
        default:
            return state;
    }
}
