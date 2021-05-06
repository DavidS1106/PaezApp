import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Button,Form } from 'react-bootstrap';

const CategoriesForm = ({cats,submit}) => {
    return (
    <div className="category">
        <Form className="text-center">
          <Form.Group controlId="formBasicCheckbox">
          <Container>
            <Row>
            <h5>Catégories: </h5>
                {
                            cats.map((item,i) => {
                                return (
                                  <Col  key={i}>          
                                    <Form.Check  onChange={submit}type="checkbox" value={item.id} name="login" label={item.nom} checked={item.bool} id="{i}"/>                                
                                  </Col>
                                );
                            })
                }
              </Row>
            </Container>
            </Form.Group>             
          </Form>
    </div>  
    )
  }
  
  export default CategoriesForm;