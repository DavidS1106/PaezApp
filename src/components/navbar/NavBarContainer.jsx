import React from 'react';
import NavBar from './NavBar';
import axios from 'axios'; 
class NavBarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          names:[],
        };
        localStorage.setItem('ids',[])
      }
      componentDidMount() {
        let items=[];
        let objects_storage=[];
        axios.get('http://localhost:3000/auteurs' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                items.push(result.data[i].prenom);
                objects_storage.push(result.data[i]);
            }
            console.log(items);
            this.setState({ names: items });
           //let json=JSON.stringify(objects_storage);
            //localStorage.setItem('admins',json);
        })
        .catch(error =>{
            console.log("error: "+error);
        });
    }
      
    render() {
      return (
          <NavBar names={this.state.names} /*setidArtist={this.props.setidArtist}*/ setIsLoggedIn={this.props.setIsLoggedIn} isLoggedIn={this.props.isLoggedIn} />
      );
    }
  }
export default NavBarContainer;