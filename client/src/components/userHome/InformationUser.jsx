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
            <div className='user_info_content'>
                <div className='user_information'>
                    <div className='user_information_child'>
                        <img src='https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='image'></img>
                    </div>
                    <div className='user_information_child'>
                        <h3>{user.username}</h3>
                        <p className='large_text'>{age()} ans</p> 
                        <table className='user_details_table'>
                            <tr>
                                <td className='column_1'><p className='large_text'>Objectif:</p> </td>
                                <td className='column_2'>
                                    <p className='large_text'>
                                        {user.goal === 'weight loss'? ' Perte de poids' : '' }
                                        {user.goal === 'extreme weight loss'? ' Perte de poids extrême' : '' }
                                        {user.goal === 'maintenance'? ' Maintien du poids' : '' }
                                        {user.goal === 'muscle gain'? ' Prise de poids' : '' }
                                        {user.goal === 'extreme muscle gain'? ' Prise de poids extrême' : '' }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td className='column_1'>
                                    <p className='large_text'>Poid: </p>
                                </td>
                                <td className='column_2'>
                                    <p className='large_text'>{user.weight}kg</p>
                                </td>
                            </tr>
                        </table>    
                    </div>
                </div>
                <table className='user_details_table'>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>E-mail</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>{user.email}</p></td>
                        </tr>
                        <tr>
                            <td className='column_1'>
                                <p className='large_text'>Mot de passe</p>
                            </td>
                            <td className='column_2'>
                                <p className='large_text'>***********</p>
                                <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({password: user.password})}}>
                                    <img  className='icon_table' src={icon} alt="Icon"/>
                                </div>
                            </td>
                        </tr>
                </table>
                <div className='buttons_user_info'>
                    <button 
                        className='delete_button' 
                        onClick={()=> {setShowModal(true); setEditingUser({delete: true})}}
                    >Supprimer le compte
                    </button>
                </div>
            </div> 
            <div className='user_info_content'>
                <h3>Détails</h3>
                <table className='user_details_table'>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>Nom d'utilisateur</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>{user.username}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({username: user.username})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>Poids actuel</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>{user.weight}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({weight: user.weight})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>Taille</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>{user.height}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({height: user.height})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>Objectif</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>
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
                        <td className='column_1'>
                            <p className='large_text'>Date de naissance</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>{user.date_of_birth}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({date_of_birth: user.date_of_birth})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>Sexe</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>{user.gender}</p>
                            <div className='button_update' onClick={()=> {setShowModal(true); setEditingUser({gender: user.gender})}}>
                                <img  className='icon_table' src={icon} alt="Icon"/>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>
                            <p className='large_text'>Niveau d'activité</p>
                        </td>
                        <td className='column_2'>
                            <p className='large_text'>
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
            <UpdateUserModal 
                showModal={showModal} 
                setShowModal={setShowModal} 
                editingUser={editingUser} 
                userId= {user.id}
            />
        </div>
        
    )
}

export default UserInfo;