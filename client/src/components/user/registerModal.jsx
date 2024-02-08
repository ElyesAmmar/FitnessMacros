import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './userStyle.css'
import Modal from 'react-bootstrap/Modal';
import { register } from '../../JS/actions/user';

function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  const [visible, setVisible] = useState(false);
  const toggleVisibility = () => {
      setVisible(!visible);
  };
  const style = {
    borderColor: 'red'
  }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HandleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value});
  }
  const HandleButton = (e) => {
    const goal = e.target.getAttribute('value');
    setUser({...user, goal: goal});
}
  const handleNext = () => {
    const error = {};
    if (page === 1 & !user.weight || user.weight < 20 || user.weight > 500) {
      error.weight = "Veuillez saisir un poids valide entre 20 et 500";
    }
    if (page === 1 & !user.height || user.height < 66 || user.height > 241) {
      error.height = "Veuillez saisir un hauteur valide entre 66 & 241";
    } 
    if (page === 1 & !user.username) {
        error.username = "Veuillez saisir un prénom valide.";
    }
    if (page === 1 & !user.gender) {
        error.gender = "Sélectionnez le sexe.";
    } 
    if (page === 1 & !user.date_of_birth) {
        error.date_of_birth = "Veuillez indiquer une date de naissance valide (dd/mm/yyyy).";
    }
    if (page === 2 & user.goal === '') {
        error.goal = "Veuillez selectionner un choix";
    }
    if (page === 3 & user.activity === '') {
      error.activity = "Veuillez selectionner un choix";
    }
    if (page === 4 & !user.email) {
      error.email = 'Veuillez saisir une adresse mail valide.';
    }
    if (page === 4 & !user.password ) {
      error.password = 'Veuillez saisir un mot de passe valide.';
    }
    if (page === 4 & user.password) {
      if (user.password.length < 10) {
        error.password = 'Le mot de passe doit comporter au moins 10 caractères.';
      }
    }
    if (Object.values(error).length > 0) {
      setErrors(error)
    } else {
      if (page < 4) {
        setPage(page + 1);
        setErrors({});
      } else {
        dispatch(register({
          ...user,
          weight: parseInt(user.weight),
          height: parseInt(user.height)
        }));
        setUser({});
        handleClose();
        navigate('/utilisateur');
      }
    }
    
  }
  const handlePrecedent = () => {
    setPage(page-1)
  }

  return (
    <div>
      <button className='primary_outline_btn' onClick={handleShow}>S'enregistrer</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'enregistrer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* {page === 0 && <UserInformation />}
          {page === 1 && <Goal />}
          {page === 2 && <Activity />} 
          {page === 3 && <User />} */}
          {page === 1 && 
            <form className='form_groups'>
              <h5>Veuillez saisisez votre Prenom et Nom</h5>
              <div className='form_control'>
                <input className='medium_input' type="text" name="username" value={user.username} placeholder='Prenom' onChange={HandleInput} style={errors.username ? style : {}}></input>
                {errors.username && <p style={{fontSize: '12px', color: 'red'}}>{errors.username}</p>}
              </div>
              <h5>Veuillez sélectionner votre sexe pour que nous puissions calculer vos besoins caloriques.</h5>
              <div className='form_control' style={{display:'flex'}}>
                <input type="radio" value="male" name="gender" checked={user.gender === "male"} onClick={HandleInput}></input>
                <label style={{margin:'7px 8px'}}>Homme</label>
                <input type="radio" value="female" name="gender" checked={user.gender === "female"} onClick={HandleInput}></input>
                <label style={{margin:'7px 8px'}}>Femme</label>
              </div>
              {errors.gender && <p style={{fontSize: '12px', color: 'red'}}>{errors.gender}</p>}
              <h5>Quelle est votre date de naissance ?</h5>
              <div className='form_control'>
                  <input type="date" className='small_input' value={user.date_of_birth} name="date_of_birth" onChange={HandleInput}></input>
                  {errors.date_of_birth && <p style={{fontSize: '12px', color: 'red'}}>{errors.date_of_birth}</p>}
              </div>
              <h5>Combien pesez-vous et mesurez-vous ?</h5>
              <p>Vous pouvez indiquer une estimation de poids et mettre cette information à jour plus tard.</p>
              <div className='form_control'>
                <div className='weight_height_input'>
                  <div className='physique_input'>
                    <input className='small_input' type="number" name="weight" value={user.weight} onChange={HandleInput}></input>
                    <span>kg</span>
                  </div>
                    <div className='physique_input'>
                      <input className='small_input' type="number" name="height" value={user.height} onChange={HandleInput}></input>
                      <span>cm</span>
                    </div><br/>
                  </div>
                  <div style={{display:'flex', justifyContent:'space-between', width:'90%'}}>
                    {errors.weight && <p style={{fontSize: '12px', color: 'red',width:'45%'}}>{errors.weight}</p>}
                    {errors.height && <p style={{fontSize: '12px', color: 'red', float: 'right',width:'50%'}}>{errors.height}</p>}
                  </div>
              </div>
            </form>
          }
          {page === 2 &&
            <div>
              <h5 style={{textAlign:"center"}}>Quel est votre objectif ?</h5>
              <button type="button" className="big_buttons" value='weight loss' onClick={HandleButton} autoFocus={user.goal === "weight loss"}>
                  Perte de poids de 0,25kg par semaine
              </button>
              <button type="button" className="big_buttons" value="extreme weight loss" onClick={HandleButton} autoFocus={user.goal === "extreme weight loss"}>
                  Perte de poids extrême de 0,5kg par semaine
              </button>
              <button type="button" className="big_buttons" value="maintenance" onClick={HandleButton} autoFocus={user.goal === "maintenance"}>
                  Maintien du poids
              </button>
              <button type="button" className="big_buttons" value="muscle gain" onClick={HandleButton} autoFocus={user.goal === "weight loss"}>
                  Prise de poids de 0,5kg par semaine
              </button>
              <button type="button" className="big_buttons" value="extreme muscle gain" onClick={HandleButton} autoFocus={user.goal === "extreme muscle gain"}>
                  Prise de poids extrême de 1kg par semaine
              </button>
              {errors.goal && <p style={{fontSize: '12px', color: 'red', marginLeft:'40px'}}>{errors.goal}</p>}
            </div>
          }
          {page === 3 &&
            <div>
              <h5 style={{textAlign:"center"}}>Quel est votre objectif ?</h5>
              <button type="button" className="big_buttons" onClick={()=> {setUser({...user,activity:"sedentary"})}} autoFocus={user.activity === "sedentary" }>
                <h6>Sédentaire</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Peu ou pas d'exercice</p>
              </button>
              <button type="button" className="big_buttons"  onClick={()=> {setUser({...user,activity:"lightly active"})}} autoFocus={user.activity === "lightly active" }>
                <h6>légèrement actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>S'entraîner 1 à 3 fois par semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setUser({...user,activity:"moderatly active"})}} autoFocus={user.activity === "moderatly active" }>
                <h6>Modérément actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement modéré 3 à 5 jours/semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setUser({...user,activity:"very active"})}} autoFocus={user.activity === "very active" }>
                <h6>Très actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement intensif 6 à 7 jours par semaine</p>
              </button>
              <button type="button" className="big_buttons" onClick={()=> {setUser({...user,activity:"extra active"})}} autoFocus={user.activity === "extra active" }>
                <h6>Extra actif</h6>
                <p style={{fontSize:"14px", color:'gray'}}>Entraînement très dur et travail physique ou 2x entraînement</p>
              </button>
              {errors.activity && <p style={{fontSize: '12px', color: 'red', marginLeft:'40px'}}>{errors.activity}</p>}
            </div>
          }
          {page === 4 && 
            <div>
              <form className='form_groups'>
                <h5>Vous y êtes presque ! Créez votre compte.</h5>
                <div className='form_control'>
                    <input className='email_input' type="email" name="email" value={user.email} placeholder='Adresse e-mail' onChange={HandleInput}></input>
                    {errors.email && <p style={{fontSize:'12px', color: 'red'}}>{errors.email}</p>}
                    <div className='password_input' >
                      <input 
                        type={visible ? 'email' : 'password'} 
                        name="password" 
                        placeholder='Créer un mot de passe'
                        onChange={HandleInput}>
                      </input>
                      <button
                        type="button"
                        className="toggle-password"
                        onClick={toggleVisibility}>
                            {visible ? 'Hide' : 'Show'}
                      </button>
                      <br/>
                      {errors.password && <p style={{fontSize:'12px', color: 'red'}}>{errors.password}</p>}
                    </div>
                </div>
              </form>
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          {page === 0 && <button className='secondary_outline_btn' onClick={handleClose} >Annuler</button>}
          {page !== 0 && <button className='secondary_outline_btn' onClick={()=>{handlePrecedent();setErrors({})}}>Précedent</button>}
          {page === 4 && <button className='primary_btn' onClick={handleNext}>Créer</button>}
          {page !== 4 && <button className='primary_btn' onClick={handleNext}>Next</button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;