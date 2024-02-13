import { GET_FOOD_BY_NAME } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    food: [],
    errors: {},
    msg: ''
}


export const foodReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case GET_FOOD_BY_NAME:
            return {...state, food: payload};
        default:
            return state;
    }
}