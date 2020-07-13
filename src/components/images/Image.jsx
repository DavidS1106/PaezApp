import React from 'react';
import Pic from 'react-bootstrap/Image'
const Image = (props) => {
    return (
      <div>
       <Pic id="accueil" src={props.img} alt={props.name} />
      </div>
    )
  }
  
  export default Image;