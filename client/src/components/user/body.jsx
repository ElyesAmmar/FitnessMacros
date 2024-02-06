import { useState, useRef, useEffect  } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { validateUser, addUserData } from '../../JS/actions/user';



function UserInformation() {
    
    const dispatch = useDispatch();
    const errors = useSelector((state)=> state.userReducer.errors);
    const user = useSelector((state)=> state.userReducer.user);
    
    const HandleData = (e) => {
        dispatch(addUserData({[e.target.name]: e.target.value}));
    }
    

  return (
    <div>   
        <form className='form_groups'>
            <h5>Veuillez saisisez votre Prenom et Nom</h5>
            <div className='form_control'>
                <input 
                    className='medium_input' 
                    type="text" 
                    name="username" 
                    value={user.username}
                    placeholder='Prenom' 
                    onChange={HandleData}
                ></input>
                {errors.username && <p style={{fontSize: '12px', color: 'red'}}>{errors.username}</p>}
            </div>
            <h5>Veuillez sélectionner votre sexe pour que nous puissions calculer vos besoins caloriques.</h5>
            <div className='form_control' style={{display:'flex'}}>
                <input 
                    type="radio" 
                    value="male" 
                    name="gender"
                    checked={user.gender === "male"}
                    onClick={HandleData}>
                </input>
                <label style={{margin:'7px 8px'}}>Homme</label>
                <input 
                    type="radio" 
                    value="female" 
                    name="gender" 
                    checked={user.gender === "female"}
                    onClick={HandleData}>
                </input>
                <label style={{margin:'7px 8px'}}>Femme</label>
               
            </div>
            {errors.gender && <p style={{fontSize: '12px', color: 'red'}}>{errors.gender}</p>}
            <h5>Quelle est votre date de naissance ?</h5>
            <div className='form_control'>
                <input 
                    type="date" 
                    className='small_input'
                    value={user.date_of_birth}
                    onChange={HandleData}
                    name="date_of_birth">
                </input>
                {errors.date_of_birth && <p style={{fontSize: '12px', color: 'red'}}>{errors.date_of_birth}</p>}
            </div>
            <h5>Combien pesez-vous et mesurez-vous ?</h5>
            <p>Vous pouvez indiquer une estimation de poids et mettre cette information à jour plus tard.</p>
            <div className='form_control'>
                <div className='weight_height_input'>
                    <div className='physique_input'>
                        <input 
                            className='small_input' 
                            type="number" 
                            name="weight"
                            value={user.weight}
                            onChange={HandleData}
                            required>
                        </input>
                        <span>kg</span>
                    </div>
                    <div className='physique_input'>
                        <input 
                            className='small_input' 
                            type="number" 
                            name="height" 
                            value={user.height}
                            onChange={HandleData}
                            required>
                        </input>
                        <span>cm</span>
                    </div><br/>
                    
                    
                </div>
                <div style={{display:'flex', justifyContent:'space-between', width:'90%'}}>
                    {errors.weight && <p style={{fontSize: '12px', color: 'red',width:'45%'}}>{errors.weight}</p>}
                    {errors.height && <p style={{fontSize: '12px', color: 'red', float: 'right',width:'50%'}}>{errors.height}</p>}
                </div>
                
            </div>
        </form>
    </div>
  );
}

export default UserInformation;