import {combineReducers} from "redux"
import { userReducer } from "./userReducer"
import { dailyNutritionReducer } from "./dailyNutritionReducer"

const rootReducer = combineReducers({userReducer, dailyNutritionReducer});

export default rootReducer;