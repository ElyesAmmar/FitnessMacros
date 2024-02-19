import './selectFoodStyle.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import breakfast from './icons/cereal.svg';
import banana from './icons/banana.svg';
import lunch from './icons/lunch.svg';
import diner from './icons/diner.svg';
import { saveFood } from '../../JS/actions/food';


function SelectFood({selectedFood}) {

  const dispatch = useDispatch(); 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log('selected food ', selectedFood);
  const savedFood = {
    servingSize: selectedFood.servingSize,
    multiplier: selectedFood.multiplier,
    calories: selectedFood.calories,
    protein: selectedFood.calories,
    carbohydrates: selectedFood.carbohydrates,
    fat: selectedFood.fat
  }
  const handleMeals = (meal) => {
    dispatch(saveFood(meal,savedFood));
  }

  return (
    <>
      <button className='primary_btn' onClick={handleShow}>Ajouter</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='food_category'>
            <div className='food_category_section'>
              <div className='food_category_block'>
                <img onClick={()=>handleMeals('breakfast')} src={breakfast}  alt=''/>
                <h6>Petit déjeuner</h6>
              </div>
              <div className='food_category_block'>
                <img onClick={()=>handleMeals('lunch')} src={lunch}  alt=''/>
                <h6>Déjeuner</h6>
              </div>
            </div>
            <div className='food_category_section'>
              <div className='food_category_block'>
                <img onClick={()=>handleMeals('dinner')} src={diner}  alt=''/>
                <h6>Diner</h6>
              </div>
              <div className='food_category_block'>
                <img onClick={()=>handleMeals('snacks')} src={banana}  alt=''/>
                <h6>Snacks</h6>
              </div>
            </div>
            
          </div>
            
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SelectFood;