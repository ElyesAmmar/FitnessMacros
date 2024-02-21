import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import './mealsStyle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteFood } from "../../JS/actions/dailyNutrition";
import { getMealsData } from '../../JS/actions/dailyNutrition';

function Meals() {

    const dispatch = useDispatch();
    const meals = useSelector((state)=> state.dailyNutritionReducer.meals);
    console.log(meals);
    const percentage = (nutri) => {
        let sum = meals.total.carbohydrates + meals.total.fat + meals.total.protein; 
        let percen = parseInt((nutri/sum)*100);
        return percen
    }
    
    const handleDelete = (index) => {
        dispatch(deleteFood(index));
    }
    return (
        <div className='meals_body'>
            <div className="meals_content">
                <div className='nutrition_fact_title'>
                    <h3>{meals? meals.nameFr : ''}</h3>
                </div>
                <div className='nutrition_fact'>
                    <h3 style={{textAlign: 'center'}}>{meals? meals.total.calories : ''}{' kcal'}</h3>
                    <div className="macronutrients_pourcentage">
                        <div className="calories_bar_fact">
                            <CircularProgressbar
                                styles={buildStyles({ textColor: "#424242", pathColor: "	#4169e1" })}
                                text={meals?`${meals.foods.length > 0? percentage(meals.total.carbohydrates) : 0}%`: ''} 
                                value={meals? meals.foods.length > 0? percentage(meals.total.carbohydrates) : 0 : ''}
                            />
                            <br />
                            <h5 style={{ textAlign: "center" }}>Glucides</h5>
                        </div>
                            <div className="calories_bar_fact">
                            <CircularProgressbar
                                styles={buildStyles({ textColor: "#424242", pathColor: "#FFD700" })}
                                text={meals?`${meals.foods.length > 0? percentage(meals.total.fat): 0}%` : ''} 
                                value={meals? meals.foods.length > 0? percentage(meals.total.fat): 0 : ''}
                                
                            />
                            <br />
                            <h5 style={{ textAlign: "center" }}>Graisses</h5>
                            </div>
                        <div className="calories_bar_fact">
                            <CircularProgressbar
                                styles={buildStyles({ textColor: "#424242", pathColor: "	#b22222" })}
                                text={meals? `${meals.foods.length > 0? percentage(meals.total.protein): 0}%` : ''} 
                                value={meals? meals.foods.length > 0? percentage(meals.total.protein): 0 : ''}
                            />
                            <br />
                            <h5 style={{ textAlign: "center" }}>Protéines</h5>
                        </div>
                    </div>
                    <table className='nutritional_fact_table'>
                            <tr className='primary_nutrition_fact'>
                                <th>Calories</th>
                                <th>{meals? meals.total.calories : ''}{' '}kcal</th>
                            </tr>
                            <tr className='primary_nutrition_fact'>
                                <th>Glucides</th>
                                <th>{meals? meals.total.carbohydrates : ''}{' '}g</th>
                            </tr>
                            <tr className='primary_nutrition_fact'>
                                <th>fat</th>
                                <th>{meals? meals.total.fat : ''}{' '}g</th>
                            </tr>
                            <tr className='primary_nutrition_fact'>
                                <th>Protéines</th>
                                <th>{meals? meals.total.protein : ''}{' '}g</th>
                            </tr>
                    </table>
                </div>
            </div>
            <div className="meals_content">
                <div className='list_foods'>  
                        {meals? meals.foods.map((el, index)=>
                            <div className='element_food'>
                                <div>
                                    {console.log(index)}
                                    <h6 style={{marginBottom:'3px'}}>{el.nameFood}</h6>
                                    <p className='medium_text'>Calories: {el.calories} kcal</p>
                                    <p style={{fontSize: '13px', margin:'0'}}>{el.multiplier}{' x '}{`(${el.servingSize})`}</p>
                                </div>
                                <div>
                                    <button onClick={()=>handleDelete(meals.name, index)}>x</button>
                                </div>
                            </div>
                        ) : ''}
                        
                    
                </div>
            </div>
        </div>
    );
}

export default Meals;
