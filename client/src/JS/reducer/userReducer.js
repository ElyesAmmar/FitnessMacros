import { USER_REGISTER, ADD_USER_DATA, USER_GET_AUTH } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    user:{},
    dailyNutrition: {},
    errors: {},
    isAuth: false,
    msg: ''
}


export const userReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case ADD_USER_DATA:
            return {...state, user:{...state.user, ...payload}};
        case USER_REGISTER:
            localStorage.setItem("token", payload.user.token)
            return {...state, user: payload.user.user, isAuth: true, dailyNutrition: payload.userNutrition.response};
        case USER_GET_AUTH:
            return {...state, user: payload.user, isAuth: true};
        default:
            return state;
    }
}

