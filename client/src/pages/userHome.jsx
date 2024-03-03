import './userHomeStyle.css'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserNutrition } from '../JS/actions/dailyNutrition';
import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';

function UserHome() {
  const dispatch = useDispatch();
  const [focusedLink, setFocusedLink] = useState(1);
  const user  = useSelector((state)=> state.userReducer.user);
  const navigate = useNavigate();
  
    useEffect(()=> {
      dispatch(getUserNutrition(user.id));
      navigate('/daily-nutrition');
    },[]);
    
  return (
    <div  className='home_user_body'>
      <nav className='navbar_user_home'>
        <ul>
          <li><Link to='/daily-nutrition' onClick={()=> setFocusedLink(1)} autoFocus={focusedLink === 1}>Mon accueil</Link></li>
          <li><Link onClick={()=> setFocusedLink(2)} autoFocus={focusedLink === 2}>Exercices</Link></li>
          <li><Link to='/user-information' onClick={()=> setFocusedLink(3)} autoFocus={focusedLink === 3}>Mes informations</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default UserHome;