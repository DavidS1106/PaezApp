import React from 'react';
import Pic from 'react-bootstrap/Image'
const Image = ({ name,img }) => {
    return (
      <div>
       <Pic id="accueil" src={img}  />
      </div>
    )
  }
  
  export default Image;