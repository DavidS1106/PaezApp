import React from 'react';
import LoginContainer from '../facebook/LoginContainer';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';
import { Row, Col, Container } from 'react-bootstrap';

class IsConnectedProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin :false
        };
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
    }
    logOut(){      
        if(localStorage.getItem('isAdmin')==="true" && this.state.isLoggedIn===true){
            this.setState({isLoggedIn:false, isAdmin:true});           
        }
        else{
            this.setState({isLoggedIn:false})
        }
        console.log("DECO");
    }
    logIn(){
        this.setState({isLoggedIn:true})

        console.log("CO");
        
    }
    render() {
        return (
            <div>
                <Container>
                <Row>
                <Col ml="auto">
                    <LoginContainer logIn={this.logIn} logOut={this.logOut} isLoggedIn={this.state.isLoggedIn} />
                </Col>
                </Row>
                <Row>
                <CategoriesFormContainer isAdmin={this.state.isLoggedIn}/>
                </Row>
                </Container>             
            </div>
        );
    }
}
export default IsConnectedProvider;