import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button,Form } from 'react-bootstrap';
const AddFormComponent = (props) => {
    return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton> 
                   
                </Modal.Header>
                <Modal.Body>
                          <Form onSubmit={props.submit}>
                          <Form.Group >
                              <Form.Control name="img" type="file" accept="image/png, image/jpeg" />
                            </Form.Group>
                            <Form.Group >
                              <Form.Label >Titre</Form.Label>
                              <Form.Control name="titre"  type="text" placeholder="Nouveau titre" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Annee</Form.Label>
                              <Form.Control name="annee" type="text" placeholder="Annee" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Label>Catégorie</Form.Label>
                              <Form.Control name="categorie" as="select">
                                <option value="ACRYLIQUE">Acrylique</option>
                                <option value="HUILE">Huile</option>
                                <option value="AUTRE">Autre</option>                                   
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Support</Form.Label>
                              <Form.Control  name="support" as="select">
                                <option value='Toile'>Toile</option>
                              </Form.Control>
                            </Form.Group>
                            <Form.Group >
                              <Form.Label>Prix</Form.Label>
                              <Form.Control name="prix" type="text" placeholder="Nouveau prix" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Valider
                            </Button>
                          </Form>
                </Modal.Body>
            </Modal>
    </div>  
    )
  }
  
  export default AddFormComponent;