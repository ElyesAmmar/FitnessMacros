import { useEffect, useState, useUpdateEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import './userStyle.css'
import Modal from 'react-bootstrap/Modal';
import UserInformation from './body';
import Goal from './goal';
import Activity from './activty';
import User from './email_password';
import { validateUser } from '../../JS/actions/user'


function Register() {

  const dispatch = useDispatch();
  const errors = useSelector((state)=> state.userReducer.errors);
  const user = useSelector((state)=> state.userReducer.user);
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(-1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleNext = () => {
    dispatch(validateUser(user,page))
      // if (Object.values(errors).length === 0) {
      //   setPage(page+1);
      // }
  }
  useEffect(()=> {
    if (Object.values(errors).length === 0) {
      setPage(page+1);
    }
  },[errors]);
  
  const handlePrecedent = () => {
    setPage(page-1)
  }

  return (
    <div>
      <button className='primary_outline_btn' onClick={handleShow}>S'enregistrer</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>S'enregistrer</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'20px 20px'}}>
          {page === 0 && <UserInformation />}
          {page === 1 && <Goal />}
          {page === 2 && <Activity />} 
          {page === 3 && <User />}
        </Modal.Body>
        <Modal.Footer>
          {page === 0 && <button className='secondary_outline_btn' onClick={handleClose} >Annuler</button>}
          {page !== 0 && <button className='secondary_outline_btn' onClick={handlePrecedent}>Précedent</button>}
          {page === 3 && <button className='primary_btn' onClick={handleClose}>Créer</button>}
          {page !== 3 && <button className='primary_btn' onClick={handleNext}>Next</button>}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;