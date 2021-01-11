import React from 'react';
import Pic from 'react-bootstrap/Image'
const Image = (props) => {
    return (
      <div>
       <Pic  src={props.img} alt={props.name} className="img-fluid" />
      </div>
    )
  }
  
  export default Image;