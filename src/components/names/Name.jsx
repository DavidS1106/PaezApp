import React from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
const Name = ({ name}) => {
    return (
      <td>
        <Col id="accueil_button">
          <Button id="accueil_button" variant="outline-dark" size="lg">{name}</Button>
        </Col>
      </td>
    )
  }
  
  export default Name;