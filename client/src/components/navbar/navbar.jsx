import './navbar.css';
import {Link, useNavigate} from 'react-router-dom';
import Register from '../user/registerModal';
import Login from '../user/loginUser';
import { UseSelector, useSelector } from 'react-redux';

function Navbar() {
    const user = useSelector((state)=> state.userReducer.user);
    const dailyNutrition = useSelector((state)=> state.userReducer.dailyNutrition);
    console.log(user,dailyNutrition);
  return (
    <div>
        <nav className='navbar'>
            <ul className='ul_navbar'>
                <h1 className='title_navbar'>FitnessLife</h1>
                <li className='li_navbar'>
                    <Link to=''>Accueil</Link>
                </li>
                <li className='li_navbar'>
                    <Link to=''>Aliments</Link>
                </li>
                <li className='li_navbar'>
                    <Link to=''>Contact</Link>
                </li>
            </ul>
            <ul className='ul_navbar'>
                <li className='li_navbar'>
                    <Login />
                </li>
                <li className='li_navbar'>
                    <Register />
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
