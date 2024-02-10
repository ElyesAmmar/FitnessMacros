import './style.css';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Register from '../user/registerModal';
import Login from '../user/loginUser';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../JS/actions/user';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.userReducer.user);
    const isAuth = useSelector((state)=> state.userReducer.isAuth);
    const [showDropdown, setShowDropdown] = useState(false);
    const logOutUser = () => {
        dispatch(logOut());
        navigate('/');
    }
  return (
    <div>
        <nav className='navbar'>
            <ul className='ul_navbar'>
                <h1 className='title_navbar' style={{borderBottom: '3px solid #228B22'}} onClick={()=> navigate('/')}>FitnessLife</h1>
                <li className='li_navbar'>
                    <Link to=''>Aliments</Link>
                </li>
                <li className='li_navbar'>
                    <Link to=''>Contact</Link>
                </li>
            </ul>
            {!isAuth && <ul className='ul_navbar'>
                <li className='li_navbar'>
                    <Login />
                </li>
                <li className='li_navbar'>
                    <Register />
                </li>
            </ul>}
            {isAuth && 
                <div className='dropdown'>
                    <button className='dropdown_title' onClick={()=> !showDropdown ? setShowDropdown(true) : setShowDropdown(false)}>
                       {user.username.toUpperCase()}
                       <svg style={{width:'20px', height:'45px', paddingLeft:'5px'}} class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M18.4 10.3A2 2 0 0 0 17 7H7a2 2 0 0 0-1.5 3.3l4.9 5.9a2 2 0 0 0 3 0l5-6Z" clip-rule="evenodd"/>
                        </svg>
                    </button>
                    {showDropdown && 
                        <div className='dropdown_content'>
                            <div className='dropdown_content_button' onClick={()=> {navigate('/dailynutrition');setShowDropdown(false)}}>Mon accueil</div>
                            <div className='dropdown_content_button'>parametres</div>
                            <div className='dropdown_content_button' onClick={()=>{logOutUser();setShowDropdown(false)}}>Se deconnecter</div>
                        </div>
                    }
                </div>
            }
        </nav>
    </div>
  );
}

export default Navbar;
