import { useState } from 'react';



function UserInformation() {
    const [userName, setUserName] = useState();
    const handleChange = (e) => {
        console.log('The user', e.target.value)
    }
  return (
    <div>   
        <form  className='form_register'>
            <div className='form_control'>
                <h5>Veuillez saisisez votre Prenom et Nom</h5>
                <input className='medium_input' type="text" name="fname" placeholder='Prenom' onChange={handleChange}></input>
            </div>
            <div className='form_control'>
                <h5>Veuillez sélectionner votre sexe pour que nous puissions calculer vos besoins caloriques.</h5>
                <input type="radio" value="Homme" name="gender" onChange={handleChange}></input>
                <label for="html">Homme</label>
                <input type="radio" value="Femme" name="gender" onChange={handleChange}></input>
                <label for="css">Femme</label>
            </div>
            <div className='form_control'>
               <h5>Quelle est votre date de naissance ?</h5>
                <input type="date" className='small_input' id="birthday" name="birthday"></input>
                <span style={{marginLeft:'5px'}}></span>
            </div>
                <div className='form_control'>
                    <h5>Combien pesez-vous ?</h5>
                    <p>Vous pouvez indiquer une estimation et mettre cette information à jour plus tard.</p>
                    <input className='small_input' type="number" name="weight" required></input>
                    <span style={{marginLeft:'5px'}}></span>
                </div>  
                <div className='form_control'>
                    <h5>Combien mesurez-vous ?:</h5>
                    <input className='small_input' type="number" name="height" required></input>
                    <span style={{marginLeft:'5px'}}></span>
                </div>
        </form>
       
    </div>
  );
}

export default UserInformation;