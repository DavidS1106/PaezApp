import React from 'react';
import Image from './Image';
import axios from 'axios';
class ImgContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          img:'' ,
          name:props.nom,
        };
      }


    componentDidMount() {
      
        axios.get('http://localhost:3000/images/name/'+this.state.name)
            .then(result =>{  
              let obj=result.data;             
              this.setState({ img: obj.uri_img });
            })
            .catch(error =>{
                console.log("error image: "+error);
            });
    }

    render() {
      return (
          <Image name={this.state.name} img={this.state.img} />
      );
    }
  }
export default ImgContainer;