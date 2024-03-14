import './style.css';
import { useState, useEffect } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Register from '../user/registerModal';
import Login from '../user/loginUser';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../JS/actions/user';
import FitnessLifeLogo from './FitnessLife_logo.png';
import MenuIcon from '../../icons/menu_icon.svg';
import CloseIcon from '../../icons/close_icon.svg';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.userReducer.user);
    const isAuth = useSelector((state)=> state.userReducer.isAuth);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showMenuMobile, setShowMenuMobile] = useState(false);
    const logOutUser = () => {
        dispatch(logOut());
        navigate('/');
    }
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            {!isMobile?
                <nav className='navbar'>
                    <ul className='ul_navbar'>
                        <img 
                            className='fitnesslife_logo' 
                            src={FitnessLifeLogo} 
                            alt="FitnessLife_logo" 
                            onClick={()=> {isAuth? navigate('/daily-nutrition') : navigate('/')}}
                        />
                        <li className='li_navbar'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='li_navbar'>
                            <Link to='/food'>Aliments</Link>
                        </li>
                        <li className='li_navbar'>
                            <Link to=''>Contact</Link>
                        </li>
                        <li className='li_navbar'>
                            <Link to=''>About</Link>
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
                                    <div className='dropdown_content_button' onClick={()=> {navigate('/daily-nutrition');setShowDropdown(false)}}>Mon accueil</div>
                                    <div className='dropdown_content_button'>parametres</div>
                                    <div className='dropdown_content_button' onClick={()=>{logOutUser();setShowDropdown(false)}}>Se deconnecter</div>
                                </div>
                            }
                        </div>
                    }
                </nav>
            :
                <div>
                    <div className='navbar_mobile'>
                        <div className='menu_navbar'>
                        {!showMenuMobile?
                            <img 
                                className='menu_icon' 
                                src={MenuIcon} alt=""
                                onClick={()=> setShowMenuMobile(true)}
                            />
                            :
                            <img 
                                className='close_icon' 
                                src={CloseIcon} 
                                onClick={()=> setShowMenuMobile(false)}
                            />
                        }
                        </div>
                            <img 
                                className='fitnesslife_logo' 
                                src={FitnessLifeLogo} 
                                alt="FitnessLife_logo" 
                                onClick={()=> {isAuth? navigate('/daily-nutrition') : navigate('/')}}
                            />
                        <div>
                            <p>hello</p>
                        </div>
                    </div>
                    {showMenuMobile &&
                    <nav className='menu_navbar_dropdown'>
                        <ul>
                            <li className='li_navbar'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to='/food'>Aliments</Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to=''>Contact</Link>
                            </li>
                            <li className='li_navbar'>
                                <Link to=''>About</Link>
                            </li>
                        </ul>
                    </nav>
                    }
                </div>
                
                
            }
        </div>
    );
}

export default Navbar;
