import './InformationUserStyle.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import icon from '../../icons/pencil-icon.svg';
import  UpdateUserModal  from './updateUserModals'


function  UserInfo() {
    const user = useSelector((state)=> state.userReducer.user);
    console.log(user);
    const notification = useSelector((state)=> state.userReducer.msg);
    
    const [editingUser, setEditingUser] = useState({});
    const [showModal, setShowModal] = useState(false);
   
    const age = () => {
        let ageInMilliseconds = new Date() - new Date(user.date_of_birth);
        let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        return Math.floor(ageInYears);
    }
    
    return (
        <div className='user_info_body'>
            <UpdateUserModal 
                setEditingUser={setEditingUser} 
                showModal={showModal} 
                setShowModal={setShowModal} 
                editingUser={editingUser} 
                userId= {user.id}
            />
            <div className='user_info_content'>
                <div className='user_information'>
                    <div className='user_information_child'>
                        <img src='' alt='image'></img>
                    </div>
                    <div className='user_information_child'>
                        <h1>{user.username}</h1>
                        <p>{age()} ans</p> 
                        <table className='user_details_table'>
                            <tr>
                                <td className='column_1'>Objectif: </td>
                                <td className='column_2'>
                                    <p>
                                        {user.goal === 'weight loss'? ' Perte de poids' : '' }
                                        {user.goal === 'extreme weight loss'? ' Perte de poids extrême' : '' }
                                        {user.goal === 'maintenance'? ' Maintien du poids' : '' }
                                        {user.goal === 'muscle gain'? ' Prise de poids' : '' }
                                        {user.goal === 'extreme muscle gain'? ' Prise de poids extrême' : '' }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='column_1'>Poid: </td>
                                <td className='column_2'><p>{user.weight}kg</p></td>
                            </tr>
                        </table>    
                    </div>
                </div>
                <table className='user_details_table'>
                    <tr>
                        <td className='column_1'>Nom d'utilisateur</td>
                        <td className='column_2'>
                            <p>{user.email}</p></td>
                        </tr>
                        <tr>
                            <td className='column_1'>Mot de passe</td>
                            <td className='column_2'>
                                <p>***********</p>
                                <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({username: user.username})}}>
                                    <img  className='icon_table' src={icon} alt="Icon"/>
                                </div>
                            </td>
                        </tr>
                </table>
                <div className='buttons_user_info'>
                    <button className='delete_button'>Supprimer le compte</button>
                </div>
            </div> 
            <div className='user_info_content'>
                <h2>Détails</h2>
                <table className='user_details_table'>
                    <tr>
                        <td className='column_1'>Nom d'utilisateur</td>
                        <td className='column_2'>
                            <p>{user.username}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({username: user.username})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Poids actuel</td>
                        <td className='column_2'>
                            <p>{user.weight}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({weight: user.weight})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Taille</td>
                        <td className='column_2'>
                            <p>{user.height}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({height: user.height})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Objectif</td>
                        <td className='column_2'>
                            <p>
                                {user.goal === 'weight loss'? 'Perte de poids' : '' }
                                {user.goal === 'extreme weight loss'? 'Perte de poids extrême' : '' }
                                {user.goal === 'maintenance'? 'Maintien du poids' : '' }
                                {user.goal === 'muscle gain'? 'Prise de poids' : '' }
                                {user.goal === 'extreme muscle gain'? 'Prise de poids extrême' : '' }
                            </p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({goal: user.goal})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Date de naissance</td>
                        <td className='column_2'>
                            <p>{user.date_of_birth}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({date_of_birth: user.date_of_birth})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Sexe</td>
                        <td className='column_2'>
                            <p>{user.gender}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({gender: user.gender})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Niveau d'activité</td>
                        <td className='column_2'>
                            <p>
                                {user.activity === 'sedentary'? 'Sédentaire' : '' }
                                {user.activity === 'lightly active'? 'légèrement actif' : '' }
                                {user.activity === 'moderatly active'? 'Modérément actif' : '' }
                                {user.activity === 'very active'? 'Très actif' : '' }
                                {user.activity === 'extra active'? 'Extra actif' : '' }
                            </p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({activity: user.activity})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        
    )
}

export default UserInfo;