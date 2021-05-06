import React from 'react';
import Pic from 'react-bootstrap/Image'


const Image = (props) => {
    return (
      <div className="img-size-parent">
       <Pic /*width="250" height="250"*/ className="img-size" src={props.img} alt={props.name} className="img-fluid" />
      </div>
    )
  }
  export default Image;