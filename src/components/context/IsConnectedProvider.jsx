import React from 'react';
import LoginContainer from '../facebook/LoginContainer';
import CategoriesFormContainer from '../forms/CategoriesFormContainer';
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
                <LoginContainer logIn={this.logIn} logOut={this.logOut} isLoggedIn={this.state.isLoggedIn} />
                <CategoriesFormContainer isAdmin={this.state.isLoggedIn}/>             
            </div>
        );
    }
}
export default IsConnectedProvider;