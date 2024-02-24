import './daily_nutrition_style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import breakfast from '../../icons/pancake.svg';
import banana from '../../icons/banana.svg';
import lunch from '../../icons/lunch.svg';
import diner from '../../icons/diner.svg';
import { getMealsData } from '../../JS/actions/dailyNutrition';
import { useEffect } from 'react';
import { getFoodDaily } from '../../JS/actions/dailyNutrition';


function DailyNutrition () {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const dailyNutrition  = useSelector((state)=> state.dailyNutritionReducer.dailyNutrition);
    const consumes = useSelector((state)=> state.dailyNutritionReducer.foodDaily); 
    useEffect(()=> {
        dispatch(getFoodDaily());
    },[]);
    const addFood = () => {
        navigate('/daily-nutrition/food');
    }
    return (
        <div className='daily_nutrition_body'>
            <div className='daily_nutrition_content'>
                <div className='section1'>
                    <div className='calories_bar'>
                        <CircularProgressbar 
                            styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} 
                            value={consumes.totalMacros.calories/dailyNutrition.calories*100} 
                            text={dailyNutrition.calories-consumes.totalMacros.calories}
                        /><br/>
                        <h2 style={{textAlign: 'center'}}>KCAL</h2>
                    </div>
                </div>
                <div className='section2'>
                    <div className='macros_nutritions'>
                        <h6 className='nutritional_title'>Glucides</h6>
                        <div className='nutritional_values_block'>
                            <div className='nutritional_values_bar'>
                                <ProgressBar 
                                    className='progress_bar' 
                                    variant="primary" 
                                    now={Math.round(consumes.totalMacros.carbohydrates)/dailyNutrition.carbohydrates*100} 
                                />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>
                                    {Math.round(consumes.totalMacros.carbohydrates)}g/{dailyNutrition.carbohydrates}g 
                                </p>
                                <p className='nutritional_values_range'>
                                    Range: {Math.round(dailyNutrition.carbohydrates * 0.8)}g - {Math.round(dailyNutrition.carbohydrates * 1.2)}g
                                </p>  
                            </div>
                        </div>
                    </div>
                    <div className='macros_nutritions'>
                        <h6 className='nutritional_title'>Protéines</h6>
                        <div className='nutritional_values_block'>
                            <div className='nutritional_values_bar'>
                                <ProgressBar 
                                    className='progress_bar' 
                                    variant="warning" 
                                    now={Math.round(consumes.totalMacros.protein)/dailyNutrition.protein*100} 
                                />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{Math.round(consumes.totalMacros.protein)}g/{dailyNutrition.protein}g</p> 
                                <p className='nutritional_values_range'>
                                    Range: {Math.round(dailyNutrition.protein * 0.8)}g - {Math.round(dailyNutrition.protein * 1.2)}g
                                </p>
                            </div>
                                
                        </div>
                    </div>
                    <div className='macros_nutritions'>
                        <h6 className='nutritional_title'>Graisses</h6>
                        <div className='nutritional_values_block'>
                            <div className='nutritional_values_bar'>
                                <ProgressBar 
                                    className='progress_bar' 
                                    variant="danger" 
                                    now={Math.round(consumes.totalMacros.fat)/dailyNutrition.fat*100} 
                                />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{Math.round(consumes.totalMacros.fat)}g/{dailyNutrition.fat}g</p> 
                                <p className='nutritional_values_range'>
                                    Range: {Math.round(dailyNutrition.fat * 0.8)}g - {Math.round(dailyNutrition.fat * 1.2)}g
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='today_title'>LES REPAS D'AUJOURD'HUI</h3>
            <div className='daily_meals'>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate(`/daily-nutrition/meals/${'breakfast'}`)}}>
                            <img src={breakfast} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Petit Déjeuner</h5>
                                {consumes.foods.breakfast.map((el)=> 
                                    <p className='medium_text'>{el.nameFood}</p>
                                )}
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{consumes.breakfast.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate(`/daily-nutrition/meals/${'lunch'}`)}}>
                            <img src={diner} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Déjeuner</h5>
                                {consumes.foods.lunch.map((el)=> 
                                    <p className='medium_text'>{el.nameFood}{', '}</p>
                                )}
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{consumes.lunch.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate(`/daily-nutrition/meals/${'dinner'}`)}}>
                            <img src={lunch} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Dinner</h5>
                                <div className='food_names'>
                                {consumes.foods.dinner.map((el, index)=> 
                                    <p className='medium_text'>{el.nameFood}{', '}</p>
                                )}
                                </div>
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{consumes.dinner.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate(`/daily-nutrition/meals/${'snacks'}`)}}>
                            <img src={banana} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Snacks</h5>
                                {consumes.foods.snacks.map((el)=> 
                                    <p className='medium_text'>{el.nameFood}{', '}</p>
                                )}
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{consumes.snacks.calories}{' Kcal'}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyNutrition;