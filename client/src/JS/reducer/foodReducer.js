import { GET_FOOD_BY_NAME, LOAD_FOOD } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    food: [],
    errors: {},
    msg: ''
}


export const foodReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case GET_FOOD_BY_NAME:
            return {...state,isLoading: false ,food: payload};
        case LOAD_FOOD:
            return {...state, isLoading: true}
        default:
            return state;
    }
}