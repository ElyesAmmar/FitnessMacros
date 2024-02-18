import './nutritionFactStyle.css'
import { useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function NutritionFact({sum,nutrients}) {

    const [showPortionsList, setShowPortionsList] = useState(false);
    const [unitMeasure, setUnitMeasure] = useState(nutrients.serving_size_fr);
    const [multiplier, setMultiplier] = useState(1);
    console.log(nutrients);
    const macrosNutritionDefault = {
        servingSize : nutrients.serving_size_fr,
        multiplier: multiplier,
        calories: nutrients.calories*multiplier,
        protein: nutrients.protein*multiplier,
        carbohydrates: nutrients.carbohydrates*multiplier,
        dietaryFiber: nutrients.dietary_fiber*multiplier,
        sugars: nutrients.sugars*multiplier,
        fat: nutrients.fat*multiplier,
        transFat: nutrients.trans_fat*multiplier,
        saturedFat: nutrients.saturated_fat*multiplier,
        monounsaturatedFat: nutrients.monounsaturated_fat*multiplier,
        polyunsaturatedFat: nutrients.polyunsaturated_fat*multiplier,
        calcium: nutrients.calcium*multiplier,
        cholesterol: nutrients.cholesterol*multiplier,
        sodium: nutrients.sodium*multiplier,
        potassium: nutrients.potassium*multiplier,
        iron: nutrients.iron*multiplier,
        vitaminA: nutrients.vitamin_a*multiplier,
        vitaminC: nutrients.vitamin_c*multiplier,
        vitaminD: nutrients.vitamin_d*multiplier
    }
    const macrosNutritionG = {
        servingSize : parseInt(nutrients.serving_size_100)/100,
        multiplier: multiplier,
        calories: (nutrients.calories_100/100)*multiplier,
        protein: (nutrients.protein_100/100)*multiplier,
        carbohydrates: (nutrients.carbohydrates_100/100)*multiplier,
        dietaryFiber: (nutrients.dietary_fiber_100/100)*multiplier,
        sugars: (nutrients.sugars_100/100)*multiplier,
        fat: (nutrients.fat_100/100)*multiplier,
        transFat: (nutrients.trans_fat_100/100)*multiplier,
        saturedFat: (nutrients.saturated_fat_100/100)*multiplier,
        monounsaturatedFat: (nutrients.monounsaturated_fat_100/100)*multiplier,
        polyunsaturatedFat: (nutrients.polyunsaturated_fat_100/100)*multiplier,
        calcium: (nutrients.calcium_100/100)*multiplier,
        cholesterol: (nutrients.cholesterol/100)*multiplier,
        sodium: (nutrients.sodium_100/100)*multiplier,
        potassium: (nutrients.potassium_100/100)*multiplier,
        iron: (nutrients.iron_100/100)*multiplier,
        vitaminA: (nutrients.vitamin_a_100/100)*multiplier,
        vitaminC: (nutrients.vitamin_c_100/100)*multiplier,
        vitaminD: (nutrients.vitamin_d_100/100)*multiplier
    }
    console.log(macrosNutritionG);
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
    console.log(multiplier);
    // const count = (inputValue) => {
    //     if ( unitMeasure === 'gramme') {
    //         setMultiplier(inputValue/100);
    //     } else {
    //         setMultiplier(inputValue);
    //     }
    // }
    console.log(displayedMacros());
    return (
        <>
            <div className='nutrition_fact_body'>
                <div className='nutrition_fact_title'>
                    <h6 className='title_nutrition_fact'>{nutrients.name_fr}</h6>
                </div>
                <div className='nutrition_fact'>
                    <div className='serving_size'>
                        <input 
                            type='number'
                            value={multiplier}
                            style={{width: '15%', paddingLeft:'20px'}}
                            // onChange={(e)=>count(e.target.value)}
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
                            <th>{(displayedMacros().calories)} kcal</th>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Glucides</th>
                            <th>{displayedMacros().carbohydrates.toFixed(2)}g</th>
                        </tr>
                        <tr  className='secondary_nutrition_fact'>
                            <td>Fibres</td>
                            <td>{isNaN(displayedMacros().dietaryFiber)? '- ' : displayedMacros().dietaryFiber.toFixed(2) + 'g'}</td>
                        </tr>
                        <tr  className='secondary_nutrition_fact'>
                            <td>Sucres</td>
                            <td>{isNaN(displayedMacros().sugars)? '- ' : displayedMacros().sugars.toFixed(2) + 'g'}</td>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Protéines</th>
                            <th>{displayedMacros().protein.toFixed(2)}g</th>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Graisses</th>
                            <th>{displayedMacros().fat.toFixed(2)}g</th>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>trans_fat</td>
                            <td>{isNaN(displayedMacros().transFat)? '- ' : displayedMacros().transFat.toFixed(2) + 'g'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>saturated_fat</td>
                            <td>{isNaN(displayedMacros().saturedFat)? '- ' : displayedMacros().saturedFat.toFixed(2) + 'g'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>monounsaturated_fat</td>
                            <td>{isNaN(displayedMacros().monounsaturatedFat)? '- ' : displayedMacros().monounsaturatedFat.toFixed(2) + 'g'}</td>
                        </tr> 
                        <tr className='secondary_nutrition_fact'>
                            <td>polyunsaturated_fat</td>
                            <td>{isNaN(displayedMacros().polyunsaturatedFat)? '- ' : displayedMacros().polyunsaturatedFat.toFixed(2) + 'g'}</td>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Cholestérol</th>
                            <th >{isNaN(displayedMacros().cholesterol)? '- ' : displayedMacros().cholesterol + 'g'}</th>
                        </tr> 
                        <tr className='primary_nutrition_fact'>
                            <th>Sodium</th>
                            <th>{displayedMacros().sodium}g</th>
                        </tr>
                        <tr className='primary_nutrition_fact'>
                            <th>Autre</th>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Vitamine A</td>
                            <td>{isNaN(displayedMacros().vitaminA)? '- ' : displayedMacros().vitaminA.toFixed(2) + 'mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Vitamine C</td>
                            <td>{isNaN(displayedMacros().vitaminC)? '- ' : displayedMacros().vitaminC.toFixed(2) + 'mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Vitamine D</td>
                            <td>{isNaN(displayedMacros().vitaminD)? '- ' : displayedMacros().vitaminD.toFixed(2) + 'mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Calcium</td>
                            <td>{isNaN(displayedMacros().calcium)? '- ' : displayedMacros().calcium.toFixed(2) + 'mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Potassium</td>
                            <td>{isNaN(displayedMacros().potassium)? '- ' : displayedMacros().potassium.toFixed(2) + 'mg'}</td>
                        </tr>
                        <tr className='secondary_nutrition_fact'>
                            <td>Iron</td>
                            <td>{isNaN(displayedMacros().iron)? '- ' : displayedMacros().iron.toFixed(2) + 'mg'}</td>
                        </tr>
                    </table>
                </div>
            </div>   
        </>
    )
}

export default NutritionFact;