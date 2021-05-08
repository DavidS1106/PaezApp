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
                            
                <Col>          
                    <Form.Check className="cat" onChange={submit}type="checkbox" value={'ACRYLIQUE'} name="ACRYLIQUE" label={'ACRYLIQUE'} checked={cats[0]} id={1}/>
                </Col>
                <Col>
                    <Form.Check className="cat" onChange={submit}type="checkbox" value={'HUILE'} name="HUILE" label={'HUILE'} checked={cats[1]} id={2}/>
                </Col>
                <Col >
                    <Form.Check className="cat" onChange={submit}type="checkbox" value={'AUTRE'} name="AUTRE" label={'AUTRE'} checked={cats[2]} id={3}/>                                
               </Col>
                                
              </Row>
            </Container>
            </Form.Group>             
          </Form>
    </div>  
    )
  }
  
  export default CategoriesForm;