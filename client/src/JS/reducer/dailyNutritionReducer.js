import { GET_DAILY_NUTRITION } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    dailyNutrition: {},
    errors: {},
    msg: ''
}


export const dailyNutritionReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case GET_DAILY_NUTRITION:
            return {...state, dailyNutrition: payload};
        default:
            return state;
    }
}
