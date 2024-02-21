import './selectFoodStyle.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal';
import breakfast from '../../icons/cereal.svg';
import banana from '../../icons/banana.svg';
import lunch from '../../icons/lunch.svg';
import diner from '../../icons/diner.svg';
import { saveFood } from '../../JS/actions/dailyNutrition';


function SelectFood({selectedFood, nameFood}) {

  const dispatch = useDispatch(); 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const savedFood = {
    servingSize: selectedFood.servingSize,
    nameFood: nameFood,
    multiplier: parseFloat(selectedFood.multiplier),
    calories: parseFloat(selectedFood.calories),
    protein: parseFloat(selectedFood.protein),
    carbohydrates: parseFloat(selectedFood.carbohydrates),
    fat: parseFloat(selectedFood.fat)
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
                <img onClick={()=>{handleMeals('breakfast');handleClose()}} src={breakfast}  alt=''/>
                <h6>Petit déjeuner</h6>
              </div>
              <div className='food_category_block'>
                <img onClick={()=>{handleMeals('lunch');handleClose()}} src={lunch}  alt=''/>
                <h6>Déjeuner</h6>
              </div>
            </div>
            <div className='food_category_section'>
              <div className='food_category_block'>
                <img onClick={()=>{handleMeals('dinner');handleClose()}} src={diner}  alt=''/>
                <h6>Diner</h6>
              </div>
              <div className='food_category_block'>
                <img onClick={()=>{handleMeals('snacks');handleClose()}} src={banana}  alt=''/>
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