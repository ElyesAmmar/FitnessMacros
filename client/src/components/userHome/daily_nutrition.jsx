import './style.css'
import { useSelector } from 'react-redux';


function DailyNutrition () {

    const dailyNutrition  = useSelector((state)=> state.dailyNutritionReducer.dailyNutrition);
    console.log(dailyNutrition);
    return (
        <div className='daily-nutrition_body'>
            <div className='daily-nutrition_content'>
                <div className='section1'>
                    <h1>{dailyNutrition.calories}</h1><br/>
                    <h3>KCAL</h3>
                </div>
                <div className='section2'>
                    <div>
                        <h4>Glucides</h4>
                        <p>{dailyNutrition.carbohydrates}g</p>
                    </div>
                    <div>
                        <h4>Protéines</h4>
                        <p>{dailyNutrition.protein}g</p>
                    </div>
                    <div>
                        <h4>Graisses</h4>
                        <p>{dailyNutrition.fat}g</p>
                    </div>
                </div>
            </div>
            <div className='daily-nutrition_content'>
                
            </div>
            
        </div>
    )
}

export default DailyNutrition;