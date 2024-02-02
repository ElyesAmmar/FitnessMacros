import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Example from './components/modal';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/example'element={<Example  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
