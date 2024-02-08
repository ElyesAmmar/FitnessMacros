import './navbar.css';
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
    const logOutUser = () => {
        dispatch(logOut());
        navigate('/accueil');
    }
  return (
    <div>
        <nav className='navbar'>
            <ul className='ul_navbar'>
                <h1 className='title_navbar'>FitnessLife</h1>
                <li className='li_navbar'>
                    <Link to='accueil'>Accueil</Link>
                </li>
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
            {isAuth && <ul className='ul_navbar'>
                <li className='li_navbar'>
                    <div>
                        <Link to='/utilisateur'>Bonjour {user.username}</Link>
                        <button onClick={logOutUser}>Se deconnecter</button>
                    </div>
                </li>
            </ul>}
        </nav>
    </div>
  );
}

export default Navbar;
