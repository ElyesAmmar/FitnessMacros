import { DELETE_FOOD, GET_FOOD_DAILY, GET_FOOD_BY_NAME, LOAD_FOOD, SAVE_FOOD, GET_FAVORITE_FOOD } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    food: [],
    foodDaily: {},
    favoriteFood: [],
    errors: {},
    msg: '',
    meals: {},
}


export const foodReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case GET_FOOD_BY_NAME:
            return {...state,isLoading: false ,food: payload};
        case LOAD_FOOD:
            return {...state, isLoading: true};
        case GET_FAVORITE_FOOD:
            return {...state, favoriteFood: payload, isLoading: false};
        default:
            return state;
    }
}