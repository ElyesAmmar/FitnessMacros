import { useEffect } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import { getUser } from './JS/actions/user'
import User from './pages/user';

function App() {

  const dispatch = useDispatch();
  const user  = useSelector((state)=> state.userReducer.user);
  const isAuth  = useSelector((state)=> state.userReducer.isAuth);
  console.log(isAuth);
  
  useEffect(()=> {
    dispatch(getUser());
  },[]);

  console.log('user from app', user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/accueil' element={<Home />}></Route>
          <Route path='/utilisateur'element={isAuth && <User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
