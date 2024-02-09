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

function App() {

  const dispatch = useDispatch();
  const user  = useSelector((state)=> state.userReducer.user);
  const isAuth  = useSelector((state)=> state.userReducer.isAuth);
  
  useEffect(()=> {
    dispatch(getUser());
  },[]);

  console.log('user from app', user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
        {/* <Route path='/' element={<Home />}></Route> */}
          <Route path='/' element={isAuth? <UserHome />  : <Home />}>
            <Route path='/dailynutrition' element={isAuth? <DailyNutrition /> : <Navigate to='/' />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
