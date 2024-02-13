import './foodNutritionStyle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function FoodNutrition() {
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
                    <div>
                        <labe>Portions:</labe>
                        <input type='number'/>
                    </div>
                <div className='nutrition_fact'>
                    <div>
                        <h5>INFORMATIONS NUTRITIONNELLES</h5>
                    </div>
                    <div>
                        <h6 className='title_nutrition_fact'>poulet</h6>
                        <p>valeur pour : 100g</p>
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