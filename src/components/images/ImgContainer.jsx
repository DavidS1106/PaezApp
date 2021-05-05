import React from 'react';
import Image from './Image';

class ImgContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          img:'' ,
          name:"",
        };
      }


    componentDidMount() {
      if(this.props.img!==undefined){
        this.setState({name:this.props.img.name,img:this.props.img.uri_img})
      }
    }
    

    render() {
      return (
          <Image name={this.state.name} img={this.state.img} />
      );
    }
  }
export default ImgContainer;