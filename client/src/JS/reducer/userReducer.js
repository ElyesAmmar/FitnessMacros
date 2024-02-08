import { USER_REGISTER, USER_LOGIN, USER_GET_AUTH } from '../constant/actionsTypes'

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
        case USER_REGISTER:
            localStorage.setItem("token", payload.user.token);
            return {...state, user: payload, isAuth: true};
        case USER_LOGIN:
            localStorage.setItem("token", payload.token);
            return {...state, user: payload, isAuth: true};
        case USER_GET_AUTH:
            return {...state, user: payload, isAuth: true};
        default:
            return state;
    }
}

