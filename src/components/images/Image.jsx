import React from 'react';
import Pic from 'react-bootstrap/Image'
const Image = (props) => {
    return (
      <div>
       <Pic onClick={props.clic}
       onMouseDown={props.down}
       onMouseOut={props.move}
       onMouseOver={props.up}id="accueil" src={props.img}  />
      </div>
    )
  }
  
  export default Image;