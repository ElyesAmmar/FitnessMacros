import { DELETE_FOOD, GET_FOOD_BY_NAME, LOAD_FOOD, SAVE_FOOD } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    food: [],
    errors: {},
    msg: '',
    meals: {},
}


export const foodReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case GET_FOOD_BY_NAME:
            return {...state,isLoading: false ,food: payload};
        case LOAD_FOOD:
            return {...state, isLoading: true}
        case SAVE_FOOD:
            return {...state, meals: payload}
        default:
            return state;
    }
}