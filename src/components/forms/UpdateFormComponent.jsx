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
                          <Form onSubmit={props.submit}>
                            <Form.Group >
                              <Form.Label >Titre</Form.Label>
                              <Form.Control name="titre"  type="text" placeholder="Nouveau titre"></Form.Control>
                            </Form.Group>
                            <Form.Group>
                              <Form.Label>Annee</Form.Label>
                              <Form.Control name="annee" type="text" placeholder="Annee">{props.year}</Form.Control> 
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                              <Form.Label>Catégorie</Form.Label>
                              <Form.Control name="categorie" as="select">
                                {
                                  props.cats.map((item,i)=>{
                                    return(
                                    <option value={item.object_id} key={i}>{item.nom}</option>
                                    )
                                  })
                                }
                              </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                            <Form.Label>Support</Form.Label>
                              <Form.Control  name="support" as="select">
                                {
                                  props.supports.map((item,i)=>{
                                    return(
                                    <option value={item._id} key={i}>{item.nom}</option>
                                    )
                                  })
                                }
                              </Form.Control>
                            </Form.Group>
                            <Form.Group >
                              <Form.Label>Prix</Form.Label>
                              <Form.Control name="prix" type="text" placeholder="Nouveau prix">{props.price}</Form.Control>
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