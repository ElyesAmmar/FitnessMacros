import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function UserInformation() {
  return (
    <>
    <Form>
        <Row className="mb-3">
            <Form.Group as={Col} md="6">
                <Form.Label>Prenom</Form.Label>
                <Form.Control
                required
                type="text"
                />
            </Form.Group>

        <Form.Group as={Col} md="6">
            <Form.Label>Nom</Form.Label>
                <Form.Control
                required
                type="text"
                />
            </Form.Group>
        </Row> 

        <Form.Group md="4">
          <Form.Label >Veuillez sélectionner votre sexe pour que nous puissions calculer vos besoins caloriques.</Form.Label>
          {/* <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label> */}
            <Form.Check
              type="radio"
              label="Homme"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Femme"
              id="formHorizontalRadios2"
            />
        </Form.Group>
      
    </Form>  
    </>
  );
}

export default UserInformation;