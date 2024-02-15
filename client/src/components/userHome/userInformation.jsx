import './userInformationStyle.css';
import { useSelector } from 'react-redux';
import icon from '../../icons/pencil-icon.svg';


function  UserInfo() {
    const user = useSelector((state)=> state.userReducer.user);
    const age = () => {
        let ageInMilliseconds = new Date() - new Date(user.date_of_birth);
        let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
        return Math.floor(ageInYears);
    }
    return (
        <div className='user_info_body'>
            <div className='user_info_content'>
                <div>
                    <div>
                        <h1>{user.username}</h1>
                        <p>{age()} ans</p> 
                         
                    </div>        
                        <p>Objectif: {user.goal}</p>
                        <p>Poid: {user.weight}kg</p>
                    </div>
                </div> 
            <div className='user_info_content'>
                <h2>Détails</h2>
                <table className='user_details_table'>
                    <tr>
                        <td className='column_1'>Nom d'utilisateur</td>
                        <td className='column_2'>
                            <p>{user.username}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Poids actuel</td>
                        <td className='column_2'>
                            <p>{user.weight}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Taille</td>
                        <td className='column_2'>
                            <p>{user.height}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Objectif</td>
                        <td className='column_2'>
                            <p>{user.goal}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Date de naissance</td>
                        <td className='column_2'>
                            <p>{user.date_of_birth}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Sexe</td>
                        <td className='column_2'>
                            <p>{user.gender}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                    <tr>
                        <td className='column_1'>Niveau d'activité</td>
                        <td className='column_2'>
                            <p>{user.activity}</p>
                            <img className='icon_table' src={icon} alt="Icon">
                            </img>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        
    )
}

export default UserInfo;