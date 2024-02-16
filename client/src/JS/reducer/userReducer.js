import { USER_REGISTER, USER_LOGIN, USER_GET_AUTH, USER_LOGOUT, UPDATE_USER, LOAD_UPDATE_USER, DELETE_USER } from '../constant/actionsTypes'

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
            localStorage.setItem("token", payload.token);
            return {...state, user: payload.user, msg: payload.msg, isAuth: true};
        case USER_LOGIN:
            localStorage.setItem("token", payload.token);
            return {...state, user: payload.user, msg: payload.msg, isAuth: true};
        case USER_GET_AUTH:
            return {...state, user: payload, isAuth: true};
        case USER_LOGOUT:
            localStorage.removeItem("token");
            return {...state, isAuth: false};
        case LOAD_UPDATE_USER:
            return {...state, isLoading: true};
        case UPDATE_USER: 
            return {...state, isLoading: false, msg: payload.msg};
        case DELETE_USER:
            return {...state, msg: payload.msg};
        default:
            return state;
    }
}

