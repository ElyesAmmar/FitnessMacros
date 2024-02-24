import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import { getUser } from './JS/actions/user'
import UserHome from './pages/userHome';
import DailyNutrition from './components/userHome/daily_nutrition';
import Food from './pages/food';
import UserInfo from './components/userHome/InformationUser';
import Meals from './components/userHome/meals';
import { getFoodDaily } from './JS/actions/dailyNutrition';



function App() {

  const dispatch = useDispatch();
  const user  = useSelector((state)=> state.userReducer.user);
  const isAuth  = useSelector((state)=> state.userReducer.isAuth);
  const consumes = JSON.parse(localStorage.getItem('Meals')); 
  
  useEffect(()=> {
  if (!consumes) {
    localStorage.setItem('Meals', JSON.stringify({ 
      breakfast:[],
      lunch: [],
      dinner: [],
      snacks: []
    }));
  }
    dispatch(getFoodDaily());
    dispatch(getUser());
  },[]);

  console.log('user from app', user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/food' element={<Food />} />
          <Route path='/' element={isAuth? <UserHome />  : <Home />}>
            <Route path='/daily-nutrition' element={isAuth? <DailyNutrition /> : <Navigate to='/' />}/>
            <Route path='/daily-nutrition/food' element={<Food />} />
            <Route path='/daily-nutrition/meals/:data' element={<Meals />} />
            <Route path='/user-information' element= {isAuth? <UserInfo /> : <Navigate to='/' />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
