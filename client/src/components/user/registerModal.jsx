import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserInformation from './informationUser';
import './registerStyle.css'


function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const style_btn = {
    marginTop: '7px',
    borderRadius: '30% solid beige',
    fontWeight: '500'
  }

  return (
    <>
      <button className='primary_outline_btn' onClick={handleShow}>S'enregistrer</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:'20px 20px'}}>
          <UserInformation />
        </Modal.Body>
        <Modal.Footer>
          <button className='secondary_outline_btn'onClick={handleClose} >Annuler</button>
          <button className='primary_btn' onClick={handleClose}>Next</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Register;