import React from 'react';
import IsConnectedContext from './IsConnectedContext';
import LoginContainer from '../facebook/LoginContainer';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';
class IsConnectedProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isAdmin:false
        };
        this.logOut = this.logOut.bind(this);
        this.logIn = this.logIn.bind(this);
    }
    logOut(){
        this.setState({isLoggedIn:false,isAdmin:false})
        console.log("DECO");
    }
    logIn(){
        this.setState({isLoggedIn:true})
        console.log("CO");
        
    }
    render() {
        return (
            <div>
                <LoginContainer logIn={this.logIn} logOut={this.logOut} isAdmin={this.state.isAdmin} />
                <CategoriesFormContainer isLoggedIn={this.state.isLoggedIn}/>             
            </div>
        );
    }
}
export default IsConnectedProvider;