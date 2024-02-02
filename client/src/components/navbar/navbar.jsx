import './navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import Example from '../modal';

function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <ul className='ul_navbar'>
                <h1 className='title_navbar' style={{marginRight:'70px'}}>FitnessLife</h1>
                <li className='li_navbar'>
                    <Link to=''>Aliments</Link>
                </li>
                <li className='li_navbar'>
                    <Link to=''>Fonctionnalités</Link>
                </li>
            </ul>
            <ul className='ul_navbar'>
                <li className='li_navbar'>
                    <Link to=''>Se connecter</Link>
                </li>
                <li className='li_navbar'>
                    <Example />
                </li>
            </ul>
        </nav>
    </div>
  );
}

export default Navbar;
