import './updateUserStyle.css'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { updateUser } from '../../JS/actions/user';


function UpdateUserModal({showModal, setShowModal, editingUser, userId}) {
  
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [visible, setVisible] = useState(false);
  const style = {
    borderColor: 'red'
  }

  useEffect(()=> {
    setUpdatedUser(editingUser)
  },[editingUser]);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const handleClose = () => setShowModal(false);
  const HandleInput = (e) => setUpdatedUser({[e.target.name]: e.target.value});
  const HandleButton = (e) => {
    const goal = e.target.getAttribute('value');
    setUpdatedUser({goal: goal});
  }
  
  const regexDate = /^\d{4}-\d{2}-\d{2}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  console.log(!passwordRegex.test(updatedUser.password));
  const handleUpdate = () => {
  const error = {};
  if (editingUser.weight && (updatedUser.weight < 20 || updatedUser.weight > 500)) {
    error.weight = "Veuillez saisir un poids valide entre 20 et 500";
  }
  if (editingUser.height && (updatedUser.height < 66 || updatedUser.height > 241)) {
    error.height = "Veuillez saisir un hauteur valide entre 66 & 241";
  } 
  if (editingUser.username && updatedUser.username !== '') {
      error.username= "Veuillez saisir un prénom valide.";
  }
  if (editingUser.date_of_birth && !regexDate.test(updatedUser.date_of_birth)) {
      error.date_of_birth = "Veuillez indiquer une date de naissance valide (dd/mm/yyyy).";
  }
  if (editingUser.goal && updatedUser.goal === '') {
    error.goal = "Veuillez selectionner un choix";
  }
  if (editingUser.activity && updatedUser.activity === '') {
    error.activity = "Veuillez selectionner un choix";
  }
  if (editingUser.password && !passwordRegex.test(updatedUser.newPassword)) {
    error.newPassword = "Le mot de passe doit comporter au moins 8 caractères et inclure à la fois des lettres et des chiffres.";
  }
  if (editingUser.password && (!updatedUser.confirmedPassword || !updatedUser.newPassword === updatedUser.confirmedPassword)) {
    error.confirmedPassword = "Le mot de passe ne correspond pas.";
  }
  if (Object.values(error).length > 0) {
    setErrors(error);
  } else {
    dispatch(updateUser(userId, updatedUser));
    handleClose();
  }
}
  return (
    <div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Body>
          {editingUser.password && 
            <form className='form_groups_center'>
              <h5>Mettre à jour votre password</h5>
              <div className='form_control'>
                <div className='password_input' >
                  <input type={visible ? 'email' : 'password'} name="old_password" placeholder='Ancien mot de passe' onChange={HandleInput} />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={toggleVisibility}>
                    {visible ? 'Hide' : 'Show'}
                  </button>
                </div>
                <div className='password_input' >
                  <input type={visible ? 'email' : 'password'} name="newPassword" placeholder='Nouveau mot de passe' onChange={HandleInput} />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={toggleVisibility}>
                    {visible ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.newPassword && <p style={{fontSize: '12px', color: 'red'}}>{errors.newPassword}</p>}
                <div className='password_input' >
                  <input type={visible ? 'email' : 'password'} name="confirmedPassword" placeholder='Nouveau mot de passe' onChange={HandleInput} />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={toggleVisibility}>
                    {visible ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.confirmedPassword && <p style={{fontSize: '12px', color: 'red'}}>{errors.confirmedPassword}</p>}
              </div>
            </form>
          }
          {editingUser.username && 
            <form className='form_groups_center'>
              <h5>Nom d'utilisateur</h5>
              <div className='form_control'>
                <input className='medium_input' type="text" name="username" value={updatedUser.username} placeholder='Prenom' onChange={HandleInput} style={errors.username ? style : {}}></input>
                {errors.username && <p style={{fontSize: '12px', color: 'red'}}>{errors.username}</p>}
              </div>
            </form> 
          }
          {editingUser.gender && 
            <form className='form_groups_center'>
              <h5>Sexe</h5>
              <div className='form_control' style={{display:'flex'}}>
                <input type="radio" value="male" name="gender" checked={updatedUser.gender === "male"} onClick={HandleInput}></input>
                <label style={{margin:'7px 8px'}}>Homme</label>
                <input type="radio" value="female" name="gender" checked={updatedUser.gender === "female"} onClick={HandleInput}></input>
                <label style={{margin:'7px 8px'}}>Femme</label>
              </div>
              {errors.gender && <p style={{fontSize: '12px', color: 'red'}}>{errors.gender}</p>}
            </form>
          }
          {editingUser.date_of_birth && 
            <form className='form_groups_center'>
              <h5>Datte de naissance</h5>
              <div className='form_control'>
                  <input type="date" className='small_input' value={updatedUser.date_of_birth} name="date_of_birth" onChange={HandleInput}></input>
                  {errors.date_of_birth && <p style={{fontSize: '12px', color: 'red'}}>{errors.date_of_birth}</p>}
              </div>
              </form>
          }
          {editingUser.weight && 
            <form className='form_groups_center'>
              <h5>Mettre à jour le poids</h5>
              <div className='form_control'>
                <div className='physique_input'>
                  <input className='small_input' type="number" name="weight" value={updatedUser.weight} onChange={HandleInput}></input>
                  <span>kg</span>
                </div>
              </div>
              {errors.weight && <p style={{fontSize: '12px', color: 'red',width:'45%'}}>{errors.weight}</p>}
            </form>
          }
          {editingUser.height &&
            <form className='form_groups_center'>
              <h5>Mettre à jour la taille</h5>
              <div className='form_control'>
                <div className='physique_input'>
                  <input className='small_input' type="number" name="height" value={updatedUser.height} onChange={HandleInput}></input>
                  <span>cm</span>
                </div>
                {errors.height && <p style={{fontSize: '12px', color: 'red',width:'45%'}}>{errors.height}</p>}
              </div>
            </form>
          }
          {editingUser.goal &&
            <div>
              <h5 style={{textAlign:"center"}}>Mettre à jour votre objectif</h5>
              <button type="button" className="big_buttons" value='weight loss' onClick={HandleButton} autoFocus={updatedUser.goal === "weight loss"}>
                Perte de poids de 0,25kg par semaine
              </button>
              <button type="button" className="big_buttons" value="extreme weight loss" onClick={HandleButton} autoFocus={updatedUser.goal === "extreme weight loss"}>
                 Perte de poids extrême de 0,5kg par semaine
              </button>
              <button type="button" className="big_buttons" value="maintenance" onClick={HandleButton} autoFocus={updatedUser.goal === "maintenance"}>
                Maintien du poids
              </button>
              <button type="button" className="big_buttons" value="muscle gain" onClick={HandleButton} autoFocus={updatedUser.goal === "muscle gain"}>
                Prise de poids de 0,5kg par semaine
              </button>
              <button type="button" className="big_buttons" value="extreme muscle gain" onClick={HandleButton} autoFocus={updatedUser.goal === "extreme muscle gain"}>
                Prise de poids extrême de 1kg par semaine
              </button>
              {errors.goal && <p style={{fontSize: '12px', color: 'red', marginLeft:'40px'}}>{errors.goal}</p>}
            </div>
          }
          {editingUser.activity &&
            <div>
              <h5 style={{textAlign:"center"}}>Mettre à jour votre niveau d'activité</h5>
              <button type="button" className="big_buttons" onClick={()=> {setUpdatedUser({activity:"sedentary"})}} autoFocus={updatedUser.activity === "sedentary" }>
                <h6>Sédentaire</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Peu ou pas d'exercice</p>
              </button>
              <button type="button" className="big_buttons"  onClick={()=> {setUpdatedUser({activity:"lightly active"})}} autoFocus={updatedUser.activity === "lightly active" }>
                <h6>légèrement actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>S'entraîner 1 à 3 fois par semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setUpdatedUser({activity:"moderatly active"})}} autoFocus={updatedUser.activity === "moderatly active" }>
                <h6>Modérément actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement modéré 3 à 5 jours/semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setUpdatedUser({activity:"very active"})}} autoFocus={updatedUser.activity === "very active" }>
                <h6>Très actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement intensif 6 à 7 jours par semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setUpdatedUser({activity:"extra active"})}} autoFocus={updatedUser.activity === "extra active" }>
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