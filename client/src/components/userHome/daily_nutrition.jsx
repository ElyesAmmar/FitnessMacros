import './daily_nutrition_style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import breakfast from '../../icons/pancake.svg';
import banana from '../../icons/banana.svg';
import lunch from '../../icons/lunch.svg';
import diner from '../../icons/diner.svg';


function DailyNutrition () {

    const dailyNutrition  = useSelector((state)=> state.dailyNutritionReducer.dailyNutrition);
    const consumes = JSON.parse(localStorage.getItem('Meals')); 

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
                        <h1 style={{textAlign: 'center'}}>KCAL</h1>
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
            <div className='daily_meals'>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div>
                            <img src={breakfast} alt='breakfast'/>
                            <h5>Petit Déjeuner</h5>
                        </div>
                        <button className='button_add'></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{breakfastMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div>
                            <img src={diner} alt='breakfast'/>
                            <h5>Déjeuner</h5>
                        </div>
                        <button className='button_add'><span>+</span></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{lunchMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div>
                            <img src={lunch} alt='breakfast'/>
                            <h5>Dinner</h5>
                        </div>
                        <button className='button_add'><span>+</span></button>
                    </div>
                    <div className='meals_sections_2'>
                        <h6>{dinnertMacros.calories}{' Kcal'}</h6>
                    </div>
                </div>
                <div className='meals_sections'>
                    <div className='meals_sections_1'>
                        <div>
                            <img src={banana} alt='breakfast'/>
                            <h5>Snacks</h5>
                        </div>
                        <button className='button_add'><span>+</span></button>
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