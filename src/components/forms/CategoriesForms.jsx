import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';

const CategoriesForm = ({cats,submit}) => {
    return (
    <div>
      <Container>
        <Row>
        <form onSubmit={submit}>
                {
                            cats.map((item,i) => {
                                return (
                                  <Col key={i}>
                                    <label key={i}>{item.nom}</label>
                                    <input  onChange={submit} type="checkbox" id="{i}" name="name" value={item.id} checked={item.bool}></input>                                 
                                  </Col>
                                );
                            })
                }              
          </form>
          </Row>
        </Container>
    </div>  
    )
  }
  
  export default CategoriesForm;