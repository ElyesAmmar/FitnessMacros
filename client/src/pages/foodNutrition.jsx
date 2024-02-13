import { useState } from 'react';
import './foodNutritionStyle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FoodNutrition() {
    const [showPortions, setShowPortions] = useState(false);

    return (
      <div className='food_body'>
        <div className="food_content">
            <div className='food_section'>
                <h4>Infos nutritionnelles de l'aliment</h4>
                <div className='dropdown_container'>
                    <div className='search_input'>
                        <input style={{width: '100%'}} type='text' placeholder='Rechercher un aliment...'/>
                        {/* <img src='./search-line-icon.svg'/> */}
                    </div>
                    <div className='list_foods'>
                        <div className='element_food'>elyes</div>
                        <div className='element_food'>elyes</div>
                        <div className='element_food'>elyes</div>
                        <div className='element_food'>elyes</div>
                    </div>
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
                                <div type='button' className='selected_content_button'>Portion normale 100g</div>
                            </div>}
                        </div>
                    </div>
                <div className='nutrition_fact'>
                    
                    <div className='head_nutrition_fact'>
                        <h6 className='title_nutrition_fact'>Aliments: poulet</h6>
                        <p>valeur pour : 100g</p>
                    </div>
                    <div>
                        <h5>INFORMATIONS NUTRITIONNELLES</h5>
                    </div>
                    <div className='macronutrients_pourcentage'>
                        <div className='calories_bar'>
                            <CircularProgressbar styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} value={10}/><br/>
                            <h5 style={{textAlign: 'center'}}>Glucides</h5>
                        </div>
                        <div className='calories_bar'>
                            <CircularProgressbar styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} value={10}/><br/>
                            <h5 style={{textAlign: 'center'}}>Protéines</h5>
                        </div>
                        <div className='calories_bar'>
                            <CircularProgressbar styles={buildStyles({textColor: "#228B22", pathColor: "#228B22"})} value={10}/><br/>
                            <h5 style={{textAlign: 'center'}}>Graisses</h5>
                        </div>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Calories</p>
                        <p>34kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Glucides</p>
                        <p>34kcal</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Fibres</p>
                        <p>34kcal</p>
                    </div>
                    <div  className='secondary_nutrition_fact'>
                        <p>Sucres</p>
                        <p>34kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Protéines</p>
                        <p>34kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Graisses</p>
                        <p>34kcal</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses saturées</p>
                        <p>34kcal</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>34kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Cholestérol</p>
                        <p >34kcal</p>
                    </div> <div className='primary_nutrition_fact'>
                        <p>Sodium</p>
                        <p>34kcal</p>
                    </div>
                    <div className='primary_nutrition_fact'>
                        <p>Autre</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>34kcal</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>34kcal</p>
                    </div>
                    <div className='secondary_nutrition_fact'>
                        <p>Graisses insaturées</p>
                        <p>34kcal</p>
                    </div>
                </div>
            </div>
            <div className='food_section'>
                
            </div>
        </div>
      </div>
    );
  }
  
  export default FoodNutrition;