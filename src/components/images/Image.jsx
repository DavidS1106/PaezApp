import React from 'react';


const Image = (props) => {
    return (
        <img className="img-size" src={props.img} alt={props.name}></img>
    )
  }
  export default Image;