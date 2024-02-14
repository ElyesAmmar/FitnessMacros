import { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../JS/actions/user'
import Modal from 'react-bootstrap/Modal';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleVisibility = () => {
      setVisible(!visible);
  };

  const handleInput = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  }
  const signIn = () => {
    dispatch(login(user));
    navigate('/dailynutrition');
  }
 
  return (
    <>
      <button className='signin_button' onClick={handleShow}>
        Se connecter
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Accés membres</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
         <form className='form_groups' style={{textAlign: 'center'}} onSubmit={signIn} >
            <h5 style={{textAlign: 'center'}}>Accés membres</h5>
            <div className='form_control'>
              <input className='email_input' type="email" name="email" value={user.email} placeholder='Adresse e-mail' onChange={handleInput}/>
              <div className='password_input' >
                <input type={visible ? 'email' : 'password'} name="password" placeholder='Créer un mot de passe' onChange={handleInput}/>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={toggleVisibility}>
                  {visible ? 'Hide' : 'Show'}
                </button>
              </div>
              <Link to='' style={{marginLeft: '0px'}}>mot de passe oublié ?</Link>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type='submit' 
            className='primary_btn' 
            style={{margin:'0 auto', width: '80%', height: '50px'}} 
            onClick={signIn}
          >Se connecter</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;