import './updateUserStyle.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import icon from '../../icons/pencil-icon.svg';
import { updateUser } from '../../JS/actions/user';


function UpdateUserModal({showModal, setShowModal, editingUser, setEditingUser, userId}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  let regex = /^\d{4}-\d{2}-\d{2}$/;
  const style = {
    borderColor: 'red'
  }
  const handleClose = () => setShowModal(false);
  const HandleInput = (e) => setEditingUser({[e.target.name]: e.target.value});
  const HandleButton = (e) => {
    const goal = e.target.getAttribute('value');
    setEditingUser({goal: goal});
}
console.log(editingUser);
const handleUpdate = () => {
  const error = {};
  if (editingUser.weight && editingUser.weight < 20 || editingUser.weight > 500) {
    error.weight = "Veuillez saisir un poids valide entre 20 et 500";
  }
  if (editingUser.height && editingUser.height < 66 || editingUser.height > 241) {
    error.height = "Veuillez saisir un hauteur valide entre 66 & 241";
  } 
  if (editingUser.username && editingUser.username != '') {
      error.username= "Veuillez saisir un prénom valide.";
  }
  if (editingUser.date_of_birth && !regex.test(editingUser.date_of_birth)) {
      error.date_of_birth = "Veuillez indiquer une date de naissance valide (dd/mm/yyyy).";
  }
  if (editingUser.goal && editingUser.goal === '') {
    error.goal = "Veuillez selectionner un choix";
  }
  if (editingUser.activity && editingUser.activity === '') {
    error.activity = "Veuillez selectionner un choix";
  }
  if (Object.values(error).length > 0) {
    setErrors(error)
  } else {
    dispatch(updateUser(userId, editingUser));
    handleClose();
  }
}
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          {editingUser.username && 
            <form className='form_groups'>
              <h5>Nom d'utilisateur</h5>
              <div className='form_control'>
                <input className='medium_input' type="text" name="username" value={editingUser.username} placeholder='Prenom' onChange={HandleInput} style={errors.username ? style : {}}></input>
                {errors.username && <p style={{fontSize: '12px', color: 'red'}}>{errors.username}</p>}
              </div>
            </form> 
          }
          {editingUser.gender && 
            <form className='form_groups'>
              <h5>Sexe</h5>
              <div className='form_control' style={{display:'flex'}}>
                <input type="radio" value="male" name="gender" checked={editingUser.gender === "male"} onClick={HandleInput}></input>
                <label style={{margin:'7px 8px'}}>Homme</label>
                <input type="radio" value="female" name="gender" checked={editingUser.gender === "female"} onClick={HandleInput}></input>
                <label style={{margin:'7px 8px'}}>Femme</label>
              </div>
              {errors.gender && <p style={{fontSize: '12px', color: 'red'}}>{errors.gender}</p>}
            </form>
          }
          {editingUser.date_of_birth && 
            <form className='form_groups'>
              <h5>Datte de naissance</h5>
              <div className='form_control'>
                  <input type="date" className='small_input' value={editingUser.date_of_birth} name="date_of_birth" onChange={HandleInput}></input>
                  {errors.date_of_birth && <p style={{fontSize: '12px', color: 'red'}}>{errors.date_of_birth}</p>}
              </div>
              </form>
          }
          {editingUser.weight && 
            <form className='form_groups'>
              <h5>Mettre à jour le poids</h5>
              <div className='form_control'>
                <div className='physique_input'>
                  <input className='small_input' type="number" name="weight" value={editingUser.weight} onChange={HandleInput}></input>
                  <span>kg</span>
                </div>
              </div>
              {errors.weight && <p style={{fontSize: '12px', color: 'red',width:'45%'}}>{errors.weight}</p>}
            </form>
          }
          {editingUser.height &&
            <form className='form_groups'>
              <h5>Mettre à jour la taille</h5>
              <div className='form_control'>
                <div className='physique_input'>
                  <input className='small_input' type="number" name="height" value={editingUser.height} onChange={HandleInput}></input>
                  <span>cm</span>
                </div>
                {errors.height && <p style={{fontSize: '12px', color: 'red',width:'45%'}}>{errors.height}</p>}
              </div>
            </form>
          }
          {editingUser.goal &&
            <div>
              <h5 style={{textAlign:"center"}}>Mettre à jour votre objectif</h5>
              <button type="button" className="big_buttons" value='weight loss' onClick={HandleButton} autoFocus={editingUser.goal === "weight loss"}>
                Perte de poids de 0,25kg par semaine
              </button>
              <button type="button" className="big_buttons" value="extreme weight loss" onClick={HandleButton} autoFocus={editingUser.goal === "extreme weight loss"}>
                 Perte de poids extrême de 0,5kg par semaine
              </button>
              <button type="button" className="big_buttons" value="maintenance" onClick={HandleButton} autoFocus={editingUser.goal === "maintenance"}>
                Maintien du poids
              </button>
              <button type="button" className="big_buttons" value="muscle gain" onClick={HandleButton} autoFocus={editingUser.goal === "muscle gain"}>
                Prise de poids de 0,5kg par semaine
              </button>
              <button type="button" className="big_buttons" value="extreme muscle gain" onClick={HandleButton} autoFocus={editingUser.goal === "extreme muscle gain"}>
                Prise de poids extrême de 1kg par semaine
              </button>
              {errors.goal && <p style={{fontSize: '12px', color: 'red', marginLeft:'40px'}}>{errors.goal}</p>}
            </div>
          }
          {editingUser.activity &&
            <div>
              <h5 style={{textAlign:"center"}}>Mettre à jour votre niveau d'activité</h5>
              <button type="button" className="big_buttons" onClick={()=> {setEditingUser({activity:"sedentary"})}} autoFocus={editingUser.activity === "sedentary" }>
                <h6>Sédentaire</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Peu ou pas d'exercice</p>
              </button>
              <button type="button" className="big_buttons"  onClick={()=> {setEditingUser({activity:"lightly active"})}} autoFocus={editingUser.activity === "lightly active" }>
                <h6>légèrement actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>S'entraîner 1 à 3 fois par semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setEditingUser({activity:"moderatly active"})}} autoFocus={editingUser.activity === "moderatly active" }>
                <h6>Modérément actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement modéré 3 à 5 jours/semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setEditingUser({activity:"very active"})}} autoFocus={editingUser.activity === "very active" }>
                <h6>Très actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement intensif 6 à 7 jours par semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setEditingUser({activity:"extra active"})}} autoFocus={editingUser.activity === "extra active" }>
                <h6>Extra actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement très dur et travail physique ou 2x entraînement</p>
              </button>
              {errors.activity && <p style={{fontSize: '12px', color: 'red', marginLeft:'40px'}}>{errors.activity}</p>}
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
            <button className='secondary_outline_btn' onClick={handleClose} >Annuler</button>
            <button className='primary_btn' onClick={handleUpdate}>Enregistrer</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UpdateUserModal;