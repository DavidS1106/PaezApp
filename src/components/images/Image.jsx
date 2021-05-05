import React, { useState } from 'react';
import Pic from 'react-bootstrap/Image'
import ResizeImage from 'react-resize-image'
import ProcessImage from 'react-imgpro';

const Image = (props) => {
    //const [imgState, setState] = useState({src:'', err:null});
    return (
      <div>
       <Pic  src={props.img} alt={props.name} className="img-fluid" />
      </div>
    )
  }
  export default Image;