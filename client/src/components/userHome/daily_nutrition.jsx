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
                    <div className='macros_nutrions'>
                        <h6>Glucides</h6>
                        <div>
                            <ProgressBar style={{margin: '20px 10px' }} variant="success" now={40} />
                            <p>{dailyNutrition.carbohydrates}g <br/> 
                                <p style={{margin: '3px', fontSize: '12px', color:'gray'}}>
                                    Range: {Math.round(dailyNutrition.carbohydrates * 0.8)}g - {Math.round(dailyNutrition.carbohydrates * 1.2)}g
                                </p>  
                            </p>
                        </div>
                    </div>
                    <div className='macros_nutrions'>
                        <h6>Protéines</h6>
                        <div>
                            <ProgressBar style={{margin: '20px 10px'}} variant="success" now={40} />
                            <p>{dailyNutrition.protein}g<br/> 
                                <p style={{margin: '3px', fontSize: '12px', color:'gray'}}>
                                    Range: {Math.round(dailyNutrition.protein * 0.8)}g - {Math.round(dailyNutrition.protein * 1.2)}g
                                </p> 
                            </p>
                        </div>
                        
                    </div>
                    <div className='macros_nutrions'>
                        <h6>Graisses</h6>
                        <div>
                            <ProgressBar style={{margin: '20px 10px'}} variant="success" now={40} />
                            <p>{dailyNutrition.fat}g<br/> 
                                <p style={{margin: '3px', fontSize: '12px', color:'gray'}}>
                                    Range: {Math.round(dailyNutrition.fat * 0.8)}g - {Math.round(dailyNutrition.fat * 1.2)}g
                                </p> 
                            </p>
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