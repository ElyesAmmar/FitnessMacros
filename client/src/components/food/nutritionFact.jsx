import './nutritionFactStyle.css'
import { useState, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function NutritionFact({sum,nutrients}) {

    const [showPortionsList, setShowPortionsList] = useState(false);
    const [unitMeasure, setUnitMeasure] = useState(nutrients.serving_size_fr);
    const [multiplier, setMultiplier] = useState(1);
    // const inputRef = useRef(null);
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
        servingSize : nutrients.serving_size_100,
        multiplier: multiplier,
        calories: nutrients.calories_100*multiplier,
        protein: nutrients.protein_100*multiplier,
        carbohydrates: nutrients.carbohydrates_100*multiplier,
        dietaryFiber: nutrients.dietary_fiber_100*multiplier,
        sugars: nutrients.sugars_100*multiplier,
        fat: nutrients.fat_100*multiplier,
        transFat: nutrients.trans_fat_100*multiplier,
        saturedFat: nutrients.saturated_fat_100*multiplier,
        monounsaturatedFat: nutrients.monounsaturated_fat_100*multiplier,
        polyunsaturatedFat: nutrients.polyunsaturated_fat_100*multiplier,
        calcium: nutrients.calcium_100*multiplier,
        cholesterol: nutrients.cholesterol*multiplier,
        sodium: nutrients.sodium_100*multiplier,
        potassium: nutrients.potassium_100*multiplier,
        iron: nutrients.iron_100*multiplier,
        vitaminA: nutrients.vitamin_a_100*multiplier,
        vitaminC: nutrients.vitamin_c_100*multiplier,
        vitaminD: nutrients.vitamin_d_100*multiplier
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
    console.log(multiplier);
    const count = (inputValue) => {
        if ( unitMeasure === 'gramme') {
            setMultiplier(inputValue/100);
        } else {
            setMultiplier(inputValue);
        }
    }
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
                            values={multiplier}
                            style={{width: '15%', paddingLeft:'20px'}}
                            onChange={(e)=>count(e.target.value)}
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
                                                setMultiplier(1);
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
                        <p>Portion : {displayedMacros().servingSize}</p>
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
                    <div className='primary_nutrition_fact'>
                        <p>Calories</p>
                        <p>{parseInt((displayedMacros().calories))} kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Glucides</p>
                        <p>{parseInt((displayedMacros().carbohydrates))}g</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Fibres</p>
                        <p>{isNaN(displayedMacros().dietaryFiber)? '- ' : parseInt((displayedMacros().dietaryFiber)) + 'g'}</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Sucres</p>
                        <p>{isNaN(displayedMacros().sugars)? '- ' : parseInt((displayedMacros().sugars)) + 'g'}</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Protéines</p>
                        <p>{parseInt((displayedMacros().protein))}g</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Graisses</p>
                        <p>{parseInt((displayedMacros().fat))}g</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>trans_fat</p>
                        <p>{isNaN(displayedMacros().transFat)? '- ' : parseInt((displayedMacros().transFat)) + 'g'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>saturated_fat</p>
                        <p>{isNaN(displayedMacros().saturedFat)? '- ' : parseInt((displayedMacros().saturedFat)) + 'g'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>monounsaturated_fat</p>
                        <p>{isNaN(displayedMacros().monounsaturatedFat)? '- ' : parseInt((displayedMacros().monounsaturatedFat)) + 'g'}</p>
                    </div> 
                    <div className='secondary_nutrition_fact'>
                        <p>polyunsaturated_fat</p>
                        <p>{isNaN(displayedMacros().polyunsaturatedFat)? '- ' : parseInt((displayedMacros().polyunsaturatedFat)) + 'g'}</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Cholestérol</p>
                        <p >{isNaN(displayedMacros().cholesterol)? '- ' : parseInt((displayedMacros().cholesterol)) + 'g'}</p>
                    </div> <div className='primary_nutrition_fact'>
                        <p>Sodium</p>
                        <p>{(parseInt(displayedMacros().sodium))}g</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Autre</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Vitamine A</p>
                        <p>{isNaN(displayedMacros().vitaminA)? '- ' : (parseInt(displayedMacros().vitaminA)) + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Vitamine C</p>
                        <p>{isNaN(displayedMacros().vitaminC)? '- ' : (parseInt(displayedMacros().vitaminC)) + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Vitamine D</p>
                        <p>{isNaN(displayedMacros().vitaminD)? '- ' : (parseInt(displayedMacros().vitaminD)) + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Calcium</p>
                        <p>{isNaN(displayedMacros().calcium)? '- ' : (parseInt(displayedMacros().calcium)) + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Potassium</p>
                        <p>{isNaN(displayedMacros().potassium)? '- ' : (parseInt(displayedMacros().potassium)) + 'mg'}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Iron</p>
                        <p>{isNaN(displayedMacros().iron)? '- ' : (parseInt(displayedMacros().iron)) + 'mg'}</p>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default NutritionFact;