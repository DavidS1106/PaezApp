import React from 'react';
import Name from './Name';
import axios from 'axios';
import { Row, Container } from 'react-bootstrap';
//import { Col } from 'react-bootstrap';
class NameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          names:[],
        };
      }

    
    componentDidMount() {
        let items=[];
        axios.get('http://localhost:3000/auteurs' /*+ DEFAULT_QUERY*/)
        .then(result =>{
            
            for(let i=0;i<result.data.length;i++){
                items.push(result.data[i].prenom);
            }
            this.setState({ names: items });
        })
        .catch(error =>{
            console.log("error: "+error);
        });
    }

    render() {
      return (
          <div>
               <Container>
               <Row>
              <table>
                <tbody>
                    <tr>
                        {
                            this.state.names.map((item,i) => {
                                return (
                                        <Name name={item} key={i} />
                                );
                            })
                        }
                    </tr>
                </tbody>
            </table>
            </Row>
            </Container>
          </div>
          
      );
    }
  }
export default NameContainer;