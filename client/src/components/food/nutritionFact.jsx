import './nutritionFactStyle.css';
import { useState, useRef, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useSelector } from  'react-redux';
import SelectFood from './selectFoodModal';

function NutritionFact({sum,nutrients}) {
    
    const isAuth = useSelector((state)=> state.userReducer.isAuth);
    const [showPortionsList, setShowPortionsList] = useState(false);
    const [unitMeasure, setUnitMeasure] = useState({});
    const [multiplier, setMultiplier] = useState(1);
    useEffect(()=> {
        setUnitMeasure(nutrients.serving_size_fr);
        setMultiplier(1);
    },[nutrients])
    const macrosNutritionDefault = {
        servingSize : nutrients.serving_size_fr,
        multiplier: multiplier,
        calories: parseInt(nutrients.calories*multiplier),
        protein: (nutrients.protein*multiplier).toFixed(2),
        carbohydrates: (nutrients.carbohydrates*multiplier).toFixed(2),
        dietaryFiber: (nutrients.dietary_fiber*multiplier).toFixed(2),
        sugars: (nutrients.sugars*multiplier).toFixed(2),
        fat: (nutrients.fat*multiplier).toFixed(2),
        transFat: (nutrients.trans_fat*multiplier).toFixed(2),
        saturedFat: (nutrients.saturated_fat*multiplier).toFixed(2),
        monounsaturatedFat: (nutrients.monounsaturated_fat*multiplier).toFixed(2),
        polyunsaturatedFat: (nutrients.polyunsaturated_fat*multiplier).toFixed(2),
        calcium: parseInt(nutrients.calcium*multiplier),
        cholesterol: parseInt(nutrients.cholesterol*multiplier),
        sodium: parseInt(nutrients.sodium*multiplier),
        potassium: (nutrients.potassium*multiplier).toFixed(2),
        iron: (nutrients.iron*multiplier).toFixed(2),
        vitaminA: (nutrients.vitamin_a*multiplier).toFixed(2),
        vitaminC: (nutrients.vitamin_c*multiplier).toFixed(2),
        vitaminD: (nutrients.vitamin_d*multiplier).toFixed(2)
    }
    const macrosNutritionG = {
        servingSize : (parseInt(nutrients.serving_size_100)/100)*multiplier + 'g',
        multiplier: multiplier,
        calories: parseInt((nutrients.calories_100/100)*multiplier),
        protein: ((nutrients.protein_100/100)*multiplier).toFixed(2),
        carbohydrates: ((nutrients.carbohydrates_100/100)*multiplier).toFixed(2),
        dietaryFiber: ((nutrients.dietary_fiber_100/100)*multiplier).toFixed(2),
        sugars: ((nutrients.sugars_100/100)*multiplier).toFixed(2),
        fat: ((nutrients.fat_100/100)*multiplier).toFixed(2),
        transFat: ((nutrients.trans_fat_100/100)*multiplier).toFixed(2),
        saturedFat: ((nutrients.saturated_fat_100/100)*multiplier).toFixed(2),
        monounsaturatedFat: ((nutrients.monounsaturated_fat_100/100)*multiplier).toFixed(2),
        polyunsaturatedFat: ((nutrients.polyunsaturated_fat_100/100)*multiplier).toFixed(2),
        calcium: parseInt((nutrients.calcium_100/100)*multiplier),
        cholesterol: parseInt((nutrients.cholesterol/100)*multiplier),
        sodium: parseInt((nutrients.sodium_100/100)*multiplier),
        potassium: ((nutrients.potassium_100/100)*multiplier).toFixed(2),
        iron: ((nutrients.iron_100/100)*multiplier).toFixed(2),
        vitaminA: ((nutrients.vitamin_a_100/100)*multiplier).toFixed(2),
        vitaminC: ((nutrients.vitamin_c_100/100)*multiplier).toFixed(2),
        vitaminD: ((nutrients.vitamin_d_100/100)*multiplier).toFixed(2)
    }
    
    const displayedMacros = () => {
        if (unitMeasure === nutrients.serving_size_fr) {
            return macrosNutritionDefault;
        } else {
            return macrosNutritionG;
        }
    }

    const percentage = (nutri) => {
        let percen = parseInt((nutri/sum)*100);
        return percen
    }

    return (
        <>
            <div className='nutrition_fact_body'>
                <div className='nutrition_fact_title'>
                    <h6 className='title_nutrition_fact'>{nutrients.name_fr}</h6>
                    {isAuth && <SelectFood selectedFood={displayedMacros()} nameFood={nutrients.name_fr} /> }
                </div>
                <div className='nutrition_fact'>
                    <div className='serving_size'>
                        <input 
                            type='number'
                            className='input_number'
                            value={multiplier}
                            style={{width: '15%', textAlign: 'center', padding: '0'}}
                            onChange={(e)=> setMultiplier(e.target.value)}
                        />
                        <div className='selected_list'>
                            <div className='selected_button' onClick={()=> showPortionsList ?  setShowPortionsList(false) : setShowPortionsList(true)}>
                                <input 
                                    type='button' 
                                    className='selected_button_title'
                                    value={unitMeasure}
                                />
                                <div className='selected_button_icon'>
                                    <svg style={{width: '24px', height: '24px'}} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </div> 
                            </div>
                            {showPortionsList && 
                                <div className='selected_content'>
                                    <div 
                                        onClick={()=> {
                                            setUnitMeasure(nutrients.serving_size_fr);
                                            setShowPortionsList(false);
                                            setMultiplier(1);
                                        }}
                                        type='button' 
                                        className='selected_content_button'>
                                        Portion: {nutrients.serving_size_fr}
                                    </div>
                                        {nutrients.serving_size_100 === '100 g' &&
                                            <div 
                                            onClick={()=> {
                                                setMultiplier(100);
                                                setUnitMeasure('gramme');
                                                setShowPortionsList(false)
                                            }}
                                            type='button' 
                                            className='selected_content_button
                                            '>Gramme
                                            </div>
                                        }
                                </div>
                            }
                        </div>
                    </div>
                    <div className='head_nutrition_fact'>
                        <h5>INFORMATIONS NUTRITIONNELLES</h5>
                        <p>Portion : 
                            {displayedMacros().servingSize}
                        </p>
                    </div>
                    <div className='macronutrients_pourcentage'>
                        <div className='calories_bar_fact'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#424242", pathColor: "	#4169e1"})} 
                                text={`${percentage(nutrients.carbohydrates)}%`} 
                                value={percentage(nutrients.carbohydrates)}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Glucides</h5>
                        </div>
                        <div className='calories_bar_fact'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#424242", pathColor: "#FFD700"})} 
                                text={`${percentage(nutrients.protein)}%`} 
                                value={percentage(nutrients.protein)}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Protéines</h5>
                        </div>
                        <div className='calories_bar_fact'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#424242", pathColor: "	#b22222"})} 
                                text={`${percentage(nutrients.fat)}%`} 
                                value={percentage(nutrients.fat)}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Graisses</h5>
                        </div>
                    </div>
                    <table className='nutritional_fact_table'>
                        <tr className='primary_nutrition_fact'>
                            <th>Calories</th>
                            <th>{(displayedMacros().calories)} {' kcal'}</th>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Glucides</th>
                            <th>{displayedMacros().carbohydrates}{' g'}</th>
                        </tr>
                        <tr  className='secondary_nutrition_fact'>
                            <td>Fibres</td>
                            <td>{isNaN(displayedMacros().dietaryFiber)? '-' : displayedMacros().dietaryFiber + ' g'}</td>
                        </tr>
                        <tr  className='secondary_nutrition_fact'>
                            <td>Sucres</td>
                            <td>{isNaN(displayedMacros().sugars)? '-' : displayedMacros().sugars + ' g'}</td>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Protéines</th>
                            <th>{displayedMacros().protein}{' g'}</th>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Graisses</th>
                            <th>{displayedMacros().fat}{' g'}</th>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>trans_fat</td>
                            <td>{isNaN(displayedMacros().transFat)? '- ' : displayedMacros().transFat + ' g'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>saturated_fat</td>
                            <td>{isNaN(displayedMacros().saturedFat)? '- ' : displayedMacros().saturedFat + ' g'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>monounsaturated_fat</td>
                            <td>{isNaN(displayedMacros().monounsaturatedFat)? '- ' : displayedMacros().monounsaturatedFat + ' g'}</td>
                        </tr> 
                        <tr className='secondary_nutrition_fact'>
                            <td>polyunsaturated_fat</td>
                            <td>{isNaN(displayedMacros().polyunsaturatedFat)? '- ' : displayedMacros().polyunsaturatedFat + ' g'}</td>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Cholestérol</th>
                            <th >{isNaN(displayedMacros().cholesterol)? '- ' : displayedMacros().cholesterol + ' mg'}</th>
                        </tr> 
                        <tr className='primary_nutrition_fact'>
                            <th>Sodium</th>
                            <th>{displayedMacros().sodium}mg</th>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Autre</th>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Vitamine A</td>
                            <td>{isNaN(displayedMacros().vitaminA)? '- ' : displayedMacros().vitaminA + ' mcg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Vitamine C</td>
                            <td>{isNaN(displayedMacros().vitaminC)? '- ' : displayedMacros().vitaminC + ' mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Vitamine D</td>
                            <td>{isNaN(displayedMacros().vitaminD)? '- ' : displayedMacros().vitaminD + ' mcg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Calcium</td>
                            <td>{isNaN(displayedMacros().calcium)? '- ' : displayedMacros().calcium + ' mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Potassium</td>
                            <td>{isNaN(displayedMacros().potassium)? '- ' : displayedMacros().potassium + ' mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Iron</td>
                            <td>{isNaN(displayedMacros().iron)? '- ' : displayedMacros().iron + ' mg'}</td>
                        </tr>
                    </table>
                </div>
            </div>   
        </>
    )
}

export default NutritionFact;