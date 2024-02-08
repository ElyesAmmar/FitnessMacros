import './navbar.css';
import {Link, useNavigate} from 'react-router-dom';
import Register from '../user/registerModal';
import Login from '../user/loginUser';
import { UseSelector, useSelector } from 'react-redux';

function Navbar() {
    const navigate = useNavigate();
    const user = useSelector((state)=> state.userReducer.user);
    const isAuth = useSelector((state)=> state.userReducer.isAuth);
    const logOut = () => {
        localStorage.removeItem("token")

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
                        <button onClick={logOut}>Se deconnecter</button>
                    </div>
                </li>
            </ul>}
        </nav>
    </div>
  );
}

export default Navbar;
