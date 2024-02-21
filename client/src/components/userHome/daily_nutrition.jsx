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
    },[])
    const breakfastMacros = consumes.breakfast.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const lunchMacros = consumes.lunch.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const dinnertMacros = consumes.dinner.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const snacksMacros = consumes.snacks.reduce((accumulator, element)=> {
        accumulator.calories += element.calories;
        accumulator.carbohydrates += element.carbohydrates;
        accumulator.protein += element.protein;
        accumulator.fat +=  element.fat;
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });
    
    const totalMacros = Object.values(consumes).reduce((accumulator, element)=> {
        element.forEach((el)=> {
            accumulator.calories += el.calories;
            accumulator.carbohydrates += el.carbohydrates;
            accumulator.protein += el.protein;
            accumulator.fat +=  el.fat;
        });
        return accumulator;
    }, { calories: 0, carbohydrates: 0, protein: 0, fat: 0 });

    const addFood = () => {
        navigate('/daily-nutrition/food');
    }
    const openMeal = (name) => {
        if (name === 'breakfast') {
            dispatch(getMealsData({name, nameFr: 'Petit déjeuner', total: breakfastMacros, foods: consumes.breakfast}))
        }
        if (name === 'lunch') {
            dispatch(getMealsData({name, nameFr: 'Déjeuner', total: lunchMacros, foods: consumes.lunch}))
        }
        if (name === 'dinner') {
            dispatch(getMealsData({name, nameFr: 'Diner', total: dinnertMacros, foods: consumes.dinner}))
        }
        if (name === 'snacks') {
            dispatch(getMealsData({name, nameFr: 'Snacks', total: snacksMacros, foods: consumes.snacks}))
        }
    }
    console.log(breakfastMacros, lunchMacros, consumes.lunch);
    return (
        <div className='daily_nutrition_body'>
            <div className='daily_nutrition_content'>
                <div className='section1'>
                    <div className='calories_bar'>
                        <CircularProgressbar 
                            styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} 
                            value={totalMacros.calories/dailyNutrition.calories*100} 
                            text={dailyNutrition.calories-totalMacros.calories}
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
                                    now={Math.round(totalMacros.carbohydrates)/dailyNutrition.carbohydrates*100} 
                                />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>
                                    {Math.round(totalMacros.carbohydrates)}g/{dailyNutrition.carbohydrates}g 
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
                                    now={Math.round(totalMacros.protein)/dailyNutrition.protein*100} 
                                />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{Math.round(totalMacros.protein)}g/{dailyNutrition.protein}g</p> 
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
                                    now={Math.round(totalMacros.fat)/dailyNutrition.fat*100} 
                                />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{Math.round(totalMacros.fat)}g/{dailyNutrition.fat}g</p> 
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
                        <div onClick={()=> {navigate('/daily-nutrition/meals'); openMeal('breakfast')}}>
                            <img src={breakfast} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Petit Déjeuner</h5>
                                {consumes.breakfast.map((el)=> 
                                    <p className='medium_text'>{el.nameFood}</p>
                                )}
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{breakfastMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate('/daily-nutrition/meals'); openMeal('lunch')}}>
                            <img src={diner} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Déjeuner</h5>
                                {consumes.lunch.map((el)=> 
                                    <p className='medium_text'>{el.nameFood}{', '}</p>
                                )}
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{lunchMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate('/daily-nutrition/meals'); openMeal('dinner')}}>
                            <img src={lunch} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Dinner</h5>
                                <div className='food_names'>
                                {consumes.dinner.map((el, index)=> 
                                    <p className='medium_text'>{el.nameFood}{', '}</p>
                                )}
                                </div>
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{dinnertMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div onClick={()=> {navigate('/daily-nutrition/meals'); openMeal('snacks')}}>
                            <img src={banana} alt='breakfast'/>
                            <div className='meals_titles'>
                                <h5>Snacks</h5>
                                {consumes.snacks.map((el)=> 
                                    <p className='medium_text'>{el.nameFood}{', '}</p>
                                )}
                            </div>
                        </div>
                        <button className='button_add' onClick={addFood}></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{snacksMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DailyNutrition;