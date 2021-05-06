import React from 'react';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {Link} from "react-router-dom";
const Name = ({name}) => {
    return (
      <td>
        <Col >
          <Link to={{ pathname:"/artists", state: { artist_name: name }}}>
            <Button  variant="outline-dark" size="lg" >{name}</Button>
          </Link>
        </Col>
      </td>
    )
  }
  
  export default Name;