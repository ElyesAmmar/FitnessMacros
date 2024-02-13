import {combineReducers} from "redux"
import { userReducer } from "./userReducer"
import { dailyNutritionReducer } from "./dailyNutritionReducer"
import { foodReducer } from "./foodReducer"

const rootReducer = combineReducers({userReducer, dailyNutritionReducer, foodReducer});

export default rootReducer;