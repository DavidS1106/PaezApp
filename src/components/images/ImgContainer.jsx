import React from 'react';
import Image from './Image';

class ImgContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
      return (
          <Image name={this.props.img.name} img={this.props.img.imgUri} />
      );
    }
  }
export default ImgContainer;