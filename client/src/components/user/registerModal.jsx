import { useState } from 'react';
import './userStyle.css'
import Modal from 'react-bootstrap/Modal';
import UserInformation from './body';
import Goal from './goal';
import Activity from './activty';
import User from './email_password';


function Register() {
  const [show, setShow] = useState(false);
  const [page, setPage] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNext = () => {
    setPage(page+1)
  }
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