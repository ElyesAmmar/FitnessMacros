import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './foodStyle.css';
import 'react-circular-progressbar/dist/styles.css';
import Spinner from 'react-bootstrap/Spinner';
import { getFood } from '../JS/actions/food';
import NutritionFact from '../components/food/nutritionFact';

function Food() {
    const dispatch = useDispatch();
    const food = useSelector((state)=> state.foodReducer.food);
    const isLoading = useSelector((state)=> state.foodReducer.isLoading);
    const [showList, setShowList] = useState(false);
    const [nutrients, setNutrients] = useState({});
    const [portion, setPortion] = useState('');
    const [sum, setSum] = useState(0);
   
    console.log(nutrients);

    const handleInput = (e) => {
        setShowList(true);
        if (e.target.value !== '') {
            dispatch(getFood(e.target.value));
        } 
        if (e.target.value === '') {
            setShowList(false);
        }
    }

    const selectFood = (food) => {
        setShowList(false);
        setNutrients(food); 
        setPortion(food.serving_size_fr);
        setSum(food.protein + food.carbohydrates + food.fat);
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
                        <input 
                            style={{width: '100%', paddingLeft: '50px'}} 
                            type='text' 
                            placeholder='Rechercher un aliment...' 
                            onChange={handleInput}
                        />
                        {isLoading &&
                        <div className='search_input_spinner'>
                            <Spinner animation="border" variant="success" />
                        </div>
                        }
                    </div>
                    {showList && food.map((el)=>
                        <div key={el.id} className='list_foods'>
                            <div className='element_food' onClick={()=>{selectFood(el)}} >
                                <h6 style={{margin:'2px'}}>{el.name_fr}</h6>
                                <p style={{fontSize: '13px', margin:'0'}}>Calories: {el.calories} kcal</p>
                                <p style={{fontSize: '13px', margin:'0'}}>Portion: {el.serving_size_fr}</p>
                            </div>
                        </div>
                     )}
                </div>
                
            </div>  
            {Object.values(nutrients).length > 0 &&
                <div className='food_section'>
                    <NutritionFact nutrients={nutrients} sum={sum} portion={portion} />
                </div>
            }
            <div className='food_section'>
                
            </div>
        </div>
      </div>
    );
  }
  
  export default Food;