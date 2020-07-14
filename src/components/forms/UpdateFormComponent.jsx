import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button,Form } from 'react-bootstrap';
const UpdateFormComponent = (props) => {
    return (
    <div>
      <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton> 
                   
                </Modal.Header>
                <Modal.Body>
                          <Form>
                            <Form.Group >
                              <Form.Label>Titre</Form.Label>
                              <Form.Control type="text" placeholder="Nouveau titre" />
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Annee</Form.Label>
                              <Form.Control type="text" placeholder="Annee" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Label>Catégorie</Form.Label>
                              <Form.Control as="select">
                                {
                                  props.cats.map((item,i)=>{
                                    return(
                                    <option key={i}>{item.nom}</option>
                                    )
                                  })
                                }
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Support</Form.Label>
                              <Form.Control as="select">
                                {
                                  props.supports.map((item,i)=>{
                                    return(
                                    <option key={i}>{item.nom}</option>
                                    )
                                  })
                                }
                              </Form.Control>
                            </Form.Group>
                            <Form.Group >
                              <Form.Label>Prix</Form.Label>
                              <Form.Control type="text" placeholder="Nouveau prix" />
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
  
  export default UpdateFormComponent;