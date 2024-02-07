import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserNutrition } from '../JS/actions/dailyNutrition';

function User() {
  const dispatch = useDispatch()
    const user  = useSelector((state)=> state.userReducer.user);
    console.log(user);

    useEffect(()=> {
      dispatch(getUserNutrition(user.id))
    },[]);
    
    const dailyNutrition  = useSelector((state)=> state.dailyNutritionReducer.dailyNutrition);
    console.log(dailyNutrition);
  return (
    <div>
       <h1>{dailyNutrition.calories}</h1>
       <h1>{dailyNutrition.protein}</h1>
       <h1>{dailyNutrition.carbohydrates}</h1>
       <h1>{dailyNutrition.fat}</h1>
    </div>
  );
}

export default User;