import { useState } from 'react';



function UserInformation() {

    const handleChange = (e) => {
        console.log('The user', e.target.value)
    }

  return (
    <div>   
        <form className='form_groups'>
            
            <h5>Veuillez saisisez votre Prenom et Nom</h5>
            <div className='form_control'>
                <input className='medium_input' type="text" name="username" placeholder='Prenom' onChange={handleChange}></input>
            </div>
            <h5>Veuillez sélectionner votre sexe pour que nous puissions calculer vos besoins caloriques.</h5>
            <div className='form_control' style={{display:'flex'}}>
                <input type="radio" value="Homme" name="gender" onChange={handleChange}></input>
                <label style={{margin:'7px 8px'}}>Homme</label>
                <input type="radio" value="Femme" name="gender" onChange={handleChange}></input>
                <label style={{margin:'7px 8px'}}>Femme</label>
            </div>
            <h5>Quelle est votre date de naissance ?</h5>
            <div className='form_control'>
                <input type="date" className='small_input' id="birthday" name="birthday"></input>
                <span style={{marginLeft:'5px'}}></span>
            </div>
            <h5>Combien pesez-vous et mesurez-vous ?</h5>
            <p>Vous pouvez indiquer une estimation de poids et mettre cette information à jour plus tard.</p>
            <div className='form_control'>
                <div className='weight_height_input'>
                    <div className='physique_input'>
                        <input className='small_input' type="number" name="weight" required></input>
                        <span>kg</span>
                    </div>
                    <div className='physique_input'>
                        <input className='small_input' type="number" name="height" required></input>
                        <span>cm</span>
                    </div>
                </div>
    
            </div>
        </form>
    </div>
  );
}

export default UserInformation;