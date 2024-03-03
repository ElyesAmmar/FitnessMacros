import axios from 'axios';
import {  DELETE_FAVORITE_FOOD, GET_FAVORITE_FOOD, GET_FOOD_BY_NAME, LOAD_FOOD, POST_FAVORITE_FOOD } from '../constant/actionsTypes';

export const getFood = (name) => async(dispatch)=> {
    dispatch({type: LOAD_FOOD});
    try {
        const response = await axios.get('http://localhost:7001/api/food/getfoods', {params :{name}});
        dispatch({
            type: GET_FOOD_BY_NAME,
            payload: response.data.response        
        })
    } catch (error) {
        console.log(error);
    }
}
export const postFavoriteFood = (userId, foodId) => async(dispatch) => {
    try {
        const response = await axios.post('http://localhost:7001/api/favorite_food/post', {user_id: userId, food_id: foodId});
        console.log('resonse', response.data);
        dispatch({
            type: POST_FAVORITE_FOOD,
            payload: response.data
        });
        dispatch(getFavoriteFood(userId));
    } catch (error) {
        console.log(error);
    }
}
export const getFavoriteFood = (id) => async(dispatch) => {
    try {
        const response = await axios.get(`http://localhost:7001/api/favorite_food/get/${id}`);
        let food = [];
        for (let el of response.data.response) {
            const data = await axios.get(`http://localhost:7001/api/food/getfood/${el.food_id}`);
            food.push(data.data.response);
        }
        dispatch({
            type: GET_FAVORITE_FOOD,
            payload: food
        })
    } catch (error) {
        console.log(error);
    }
}
export const deleteFavoriteFood = (user_id, food_id) => async(dispatch) => {
    try {
        const response = await axios.delete(`http://localhost:7001/api/favorite_food/delete/${food_id}`);
        console.log(response.data.msg);
        dispatch({
            type: DELETE_FAVORITE_FOOD,
            payload: response.data.msg
        });
        dispatch(getFavoriteFood(user_id));
    } catch (error) {
        console.log(error);
    }
}
