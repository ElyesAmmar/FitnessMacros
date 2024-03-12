import { useSelector, useDispatch } from "react-redux";
import './mealsStyle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteFood } from "../../JS/actions/dailyNutrition";
import { useNavigate, useParams } from "react-router-dom";

function Meals() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const mealsCategorie = useParams();
    const mealsFromLocalStorage = useSelector((state)=> state.dailyNutritionReducer.foodDaily);
    const meals = () => {
        if (mealsCategorie.data === 'breakfast') {
            return {nameFr: 'Petit déjeuner', total: mealsFromLocalStorage.breakfast, foods: mealsFromLocalStorage.foods.breakfast};
        }
        if (mealsCategorie.data === 'lunch') {
            return {nameFr: 'Déjeuner', total: mealsFromLocalStorage.lunch, foods: mealsFromLocalStorage.foods.lunch};
        }
        if (mealsCategorie.data === 'dinner') {
            return {nameFr: 'Dinner', total: mealsFromLocalStorage.dinner, foods: mealsFromLocalStorage.foods.dinner};
        }
        if (mealsCategorie.data === 'snacks') {
            return {nameFr: 'Snacks', total: mealsFromLocalStorage.snacks, foods: mealsFromLocalStorage.foods.snacks};
        }
    }
    const percentage = (nutri) => {
        let sum = meals().total.carbohydrates + meals().total.fat + meals().total.protein; 
        let percen = parseInt((nutri/sum)*100);
        return percen
    }
    const handleDelete = (index) => {
        dispatch(deleteFood(mealsCategorie.data,index));
    }
    console.log('meals from meals',  meals());
    return (
        <div className='meals_body'>
            <div className="meals_header">
                <button className="previous_button" onClick={()=> navigate('/daily-nutrition')}>{'<--'}</button>
                <div className='nutrition_fact_title'>
                    <h3>{meals()? meals().nameFr : ''}</h3>
                </div>
            </div>
            <div className="meals_main">
            <div className="meals_content">
                
                <div className='nutrition_fact'>
                    <h3 style={{textAlign: 'center'}}>{meals()? meals().total.calories : ''}{' kcal'}</h3>
                    <div className="macronutrients_pourcentage">
                        <div className="calories_bar_fact">
                            <CircularProgressbar
                                styles={buildStyles({ textColor: "#424242", pathColor: "	#4169e1" })}
                                text={meals()?`${meals().foods.length > 0? percentage(meals().total.carbohydrates) : 0}%`: ''} 
                                value={meals()? meals().foods.length > 0? percentage(meals().total.carbohydrates) : 0 : ''}
                            />
                            <br />
                            <h5 style={{ textAlign: "center" }}>Glucides</h5>
                        </div>
                            <div className="calories_bar_fact">
                            <CircularProgressbar
                                styles={buildStyles({ textColor: "#424242", pathColor: "#FFD700" })}
                                text={meals()?`${meals().foods.length > 0? percentage(meals().total.fat): 0}%` : ''} 
                                value={meals()? meals().foods.length > 0? percentage(meals().total.fat): 0 : ''}
                                
                            />
                            <br />
                            <h5 style={{ textAlign: "center" }}>Graisses</h5>
                            </div>
                        <div className="calories_bar_fact">
                            <CircularProgressbar
                                styles={buildStyles({ textColor: "#424242", pathColor: "	#b22222" })}
                                text={meals()? `${meals().foods.length > 0? percentage(meals().total.protein): 0}%` : ''} 
                                value={meals()? meals().foods.length > 0? percentage(meals().total.protein): 0 : ''}
                            />
                            <br />
                            <h5 style={{ textAlign: "center" }}>Protéines</h5>
                        </div>
                    </div>
                    <table className='nutritional_fact_table'>
                            <tr className='primary_nutrition_fact'>
                                <th>Calories</th>
                                <th>{meals()? meals().total.calories : ''}{' '}kcal</th>
                            </tr>
                            <tr className='primary_nutrition_fact'>
                                <th>Glucides</th>
                                <th>{meals()? meals().total.carbohydrates : ''}{' '}g</th>
                            </tr>
                            <tr className='primary_nutrition_fact'>
                                <th>fat</th>
                                <th>{meals()? meals().total.fat : ''}{' '}g</th>
                            </tr>
                            <tr className='primary_nutrition_fact'>
                                <th>Protéines</th>
                                <th>{meals()? meals().total.protein : ''}{' '}g</th>
                            </tr>
                    </table>
                </div>
            </div>
            <div className="meals_content">
                <div className='list_foods' style={{backgroundColor: 'white'}}>  
                        {meals()? meals().foods.map((el, index)=>
                            <div className='element_food'>
                                <div>
                                    <h6 style={{marginBottom:'3px'}}>{el.nameFood}</h6>
                                    <p className='medium_text'>Calories: {el.calories} kcal</p>
                                    <p style={{fontSize: '13px', margin:'0'}}>{el.multiplier}{' x '}{`(${el.servingSize})`}</p>
                                </div>
                                <div>
                                    <button className="icon_delete" onClick={()=>handleDelete(meals().name, index)}>x</button>
                                </div>
                            </div>
                        ) : ''}
                        
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default Meals;
