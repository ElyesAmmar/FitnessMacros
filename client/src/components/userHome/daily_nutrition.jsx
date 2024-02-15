import './daily_nutrition_style.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function DailyNutrition () {

    const dailyNutrition  = useSelector((state)=> state.dailyNutritionReducer.dailyNutrition);
    console.log(dailyNutrition);
    return (
        <div className='daily-nutrition_body'>
            <div className='daily-nutrition_content'>
                <div className='section1'>
                    <div className='calories_bar'>
                        <CircularProgressbar styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} value={10} text={dailyNutrition.calories} /><br/>
                        <h1 style={{textAlign: 'center'}}>KCAL</h1>
                    </div>
                </div>
                <div className='section2'>
                    <div className='macros_nutritions'>
                        <h6 className='nutritional_values'>Glucides</h6>
                        <div className='nutritional_values_block'>
                            <div className='nutritional_values_bar'>
                                <ProgressBar  variant="primary" now={40} />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{dailyNutrition.carbohydrates}g </p>
                                <p className='nutritional_values_range'>
                                    Range: {Math.round(dailyNutrition.carbohydrates * 0.8)}g - {Math.round(dailyNutrition.carbohydrates * 1.2)}g
                                </p>  
                            </div>
                        </div>
                    </div>
                    <div className='macros_nutritions'>
                        <h6 className='nutritional_values'>Protéines</h6>
                        <div className='nutritional_values_block'>
                            <div className='nutritional_values_bar'>
                                <ProgressBar variant="warning" now={40} />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{dailyNutrition.protein}g</p> 
                                <p className='nutritional_values_range'>
                                    Range: {Math.round(dailyNutrition.protein * 0.8)}g - {Math.round(dailyNutrition.protein * 1.2)}g
                                </p>
                            </div>
                                
                        </div>
                        
                    </div>
                    <div className='macros_nutritions'>
                        <h6 className='nutritional_values'>Graisses</h6>
                        <div className='nutritional_values_block'>
                            <div className='nutritional_values_bar'>
                                <ProgressBar variant="danger" now={40} />
                            </div>
                            <div className='nutritional_values_value'>
                                <p className='nutritional_values'>{dailyNutrition.fat}g</p> 
                                <p className='nutritional_values_range'>
                                    Range: {Math.round(dailyNutrition.fat * 0.8)}g - {Math.round(dailyNutrition.fat * 1.2)}g
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='daily-nutrition_content'>
                
            </div>
            
        </div>
    )
}

export default DailyNutrition;