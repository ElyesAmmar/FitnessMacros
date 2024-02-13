import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './foodStyle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Spinner from 'react-bootstrap/Spinner';
import { getFood } from '../JS/actions/food';

function Food() {
    const dispatch = useDispatch();
    const [showPortions, setShowPortions] = useState(false);
    const [showList, setShowList] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const food = useSelector((state)=> state.foodReducer.food);
    const [nutrients, setNutrients] = useState({});
    const [sum, setSum] = useState(0);
    console.log(food);
    console.log(sum);

    const handleInput = (e) => {
        setShowList(true);
        setIsLoading(true);
        if (e.target.value !== '') {
            dispatch(getFood(e.target.value));
        } 
        setIsLoading(false);
    }
    
    
    return (
      <div className='food_body'>
        <div className="food_content">
            <div className='food_section'>
                <div>
                    <h4>Infos nutritionnelles de l'aliment</h4>
                    
                </div>
                
                <div className='dropdown_container'>
                    <div className='search_input'>
                        <div className='search_input_icons'>
                            <svg  style={{width: '35px', height: '35px'}} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input style={{width: '100%', paddingLeft: '50px'}} type='text' placeholder='Rechercher un aliment...' onChange={handleInput}/>
                        {isLoading &&
                        <div className='search_input_spinner'>
                            <Spinner animation="border" variant="success" />
                        </div>
                        }
                    </div>
                    {showList && food.map((el)=>
                        <div key={el.id} className='list_foods'>
                            <div className='element_food' onClick={()=> {setShowList(false);setNutrients(el); setSum(el.protein + el.carbohydrates + el.fat)}} >
                                <h6 style={{margin:'2px'}}>{el.name_fr}</h6>
                                <p style={{fontSize: '13px', margin:'0'}}>Calories: {el.calories} kcal</p>
                                <p style={{fontSize: '13px', margin:'0'}}>Portion: {el.serving_size_fr}</p>
                            </div>
                        </div>
                     )}
                </div>
                
            </div>  
            <div className='food_section'>
                    <div className='serving_size'>
                        <input type='number' style={{width: '20%'}}/>
                        <div className='selected_list'>
                            <div className='selected_button' onClick={()=> showPortions ?  setShowPortions(false) : setShowPortions(true)}>
                                <input type='button' value={'elyes'} className='selected_button_title'/>
                                <div className='selected_button_icon'>
                                    <svg style={{width: '24px', height: '24px'}} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                                    </svg>
                                </div> 
                            </div>
                            {showPortions && <div className='selected_content'>
                                <div type='button' className='selected_content_button'>Portion</div>
                                <div type='button' className='selected_content_button'>gramme</div>
                                <div type='button' className='selected_content_button'>Portion 100g</div>
                            </div>}
                        </div>
                    </div>
                <div className='nutrition_fact'>
                    <div className='head_nutrition_fact'>
                        <h6 className='title_nutrition_fact'>Aliments: {nutrients.name_fr}</h6>
                        <p>valeur pour : {nutrients.serving_size}</p>
                    </div>
                    <div>
                        <h5>INFORMATIONS NUTRITIONNELLES</h5>
                    </div>
                    <div className='macronutrients_pourcentage'>
                        <div className='calories_bar'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} 
                                text={`${parseInt((nutrients.carbohydrates/sum)*100)}%`} 
                                value={(nutrients.carbohydrates/sum)*100}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Glucides</h5>
                        </div>
                        <div className='calories_bar'>
                            <CircularProgressbar 
                                styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} 
                                text={`${parseInt((nutrients.protein/sum)*100)}%`} 
                                value={(nutrients.protein/sum)*100}
                            /><br/>
                            <h5 style={{textAlign: 'center'}}>Protéines</h5>
                        </div>
                        <div className='calories_bar'>
                            <CircularProgressbar styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} text={`${parseInt((nutrients.fat/sum)*100)}%`} value={(nutrients.fat/sum)*100}/><br/>
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
                        <p>{nutrients.dietary_fiber}g</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Sucres</p>
                        <p>{nutrients.sugars}g</p>
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
                        <p>{nutrients.trans_fat}g</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>saturated_fat</p>
                        <p>{nutrients.saturated_fat}g</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>monounsaturated_fat</p>
                        <p >{nutrients.monounsaturated_fat}g</p>
                    </div> 
                    <div className='secondary_nutrition_fact'>
                        <p>polyunsaturated_fat</p>
                        <p>{nutrients.polyunsaturated_fat}g</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Cholestérol</p>
                        <p >{nutrients.cholesterol}g</p>
                    </div> <div className='primary_nutrition_fact'>
                        <p>Sodium</p>
                        <p>{nutrients.sodium}g</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Autre</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>{nutrients.vitamin_a}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>{nutrients.vitamin_c}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>{nutrients.vitamin_d}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>{nutrients.calcium}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>{nutrients.potassium}</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>{nutrients.iron}</p>
                    </div>
                </div>
            </div>
            <div className='food_section'>
                
            </div>
        </div>
      </div>
    );
  }
  
  export default Food;