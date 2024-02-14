import './nutritionFactStyle.css'
import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function NutritionFact({sum,nutrients,portion}) {

    const [showPortionsList, setShowPortionsList] = useState(false);

    const percentage = (nutri) => {
        let percen = parseInt((nutri/sum)*100);
        return percen
    }
    return (
        <>
            <div className='nutrition_fact_body'>
                <div className='nutrition_fact_title'>
                    <h6 className='title_nutrition_fact'>{nutrients.name_fr}</h6>
                </div>
                <div className='nutrition_fact'>
                    <div className='serving_size'>
                        <input type='number' style={{width: '20%'}}/>
                        <div className='selected_list'>
                            <div className='selected_button' onClick={()=> showPortionsList ?  setShowPortionsList(false) : setShowPortionsList(true)}>
                                <input type='button' value={portion} className='selected_button_title'/>
                                <div className='selected_button_icon'>
                                    <svg style={{width: '24px', height: '24px'}} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </div> 
                            </div>
                            {showPortionsList && 
                                <div className='selected_content'>
                                    <div type='button' className='selected_content_button'>Portion: {nutrients.serving_size_fr}</div>
                                        {nutrients.serving_size_100 === '100 g' &&
                                            <div type='button' className='selected_content_button'>gramme</div>
                                        }
                                </div>
                            }
                        </div>
                    </div>
                    <div className='head_nutrition_fact'>
                        <h5>INFORMATIONS NUTRITIONNELLES</h5>
                        <p>Portion : {nutrients.serving_size_fr}</p>
                    </div>
                    <div className='macronutrients_pourcentage'>
                        <div className='calories_bar'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#424242", pathColor: "	#4169e1"})} 
                                text={`${percentage(nutrients.carbohydrates)}%`} 
                                value={percentage(nutrients.carbohydrates)}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Glucides</h5>
                        </div>
                        <div className='calories_bar'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#424242", pathColor: "#FFD700"})} 
                                text={`${percentage(nutrients.protein)}%`} 
                                value={percentage(nutrients.protein)}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Protéines</h5>
                        </div>
                        <div className='calories_bar'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#424242", pathColor: "	#b22222"})} 
                                text={`${percentage(nutrients.fat)}%`} 
                                value={percentage(nutrients.fat)}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Graisses</h5>
                        </div>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Calories</p>
                        <p>{nutrients.calories} kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Glucides</p>
                        <p>{nutrients.carbohydrates}g</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Fibres</p>
                        <p>{nutrients.dietary_fiber === '-'? '- ' : nutrients.dietary_fiber + 'g'}</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Sucres</p>
                        <p>{nutrients.sugars === '-'? '- ' : nutrients.sugars + 'g'}</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Protéines</p>
                        <p>{nutrients.protein}g</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Graisses</p>
                        <p>{nutrients.fat}g</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>trans_fat</p>
                        <p>{nutrients.trans_fat === '-'? '- ' : nutrients.trans_fat + 'g'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>saturated_fat</p>
                        <p>{nutrients.saturated_fat === '-'? '- ' : nutrients.saturated_fat + 'g'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>monounsaturated_fat</p>
                        <p>{nutrients.monounsaturated_fat === '-'? '- ' : nutrients.monounsaturated_fat + 'g'}</p>
                    </div> 
                    <div className='secondary_nutrition_fact'>
                        <p>polyunsaturated_fat</p>
                        <p>{nutrients.polyunsaturated_fat === '-'? '- ' : nutrients.polyunsaturated_fat + 'g'}</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Cholestérol</p>
                        <p >{nutrients.cholesterol === '-'? '- ' : nutrients.cholesterol + 'g'}</p>
                    </div> <div className='primary_nutrition_fact'>
                        <p>Sodium</p>
                        <p>{nutrients.sodium}g</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Autre</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Vitamine A</p>
                        <p>{nutrients.vitamin_a === '-'? '- ' : nutrients.vitamin_a+ 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Vitamine C</p>
                        <p>{nutrients.vitamin_c === '-'? '- ' : nutrients.vitamin_c + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Vitamine D</p>
                        <p>{nutrients.vitamin_d === '-'? '- ' : nutrients.vitamin_d + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Calcium</p>
                        <p>{nutrients.calcium === '-'? '- ' : nutrients.calcium + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Potassium</p>
                        <p>{nutrients.potassium === '-'? '- ' : nutrients.potassium + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Iron</p>
                        <p>{nutrients.iron === '-'? '- ' : nutrients.iron + 'mg'}</p>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default NutritionFact;