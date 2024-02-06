import { USER_REGISTER,VALIDATE_USER, ADD_USER_DATA } from '../constant/actionsTypes'

const initialeState = {
    isLoading : false,
    user:{},
    errors: {},
    isAuth: false,
    msg: ''
}


export const userReducer = (state= initialeState, {type, payload})=>{
    
    switch (type) {
        case ADD_USER_DATA:
            return {...state, user:{...state.user, ...payload}}
        case VALIDATE_USER:
            return {...state, errors: {...payload}}
        case USER_REGISTER:
            return {}
        default:
            return state;
    }
}

