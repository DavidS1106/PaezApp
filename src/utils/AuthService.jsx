class AuthService {
    IsLoggedIn() {

        if(sessionStorage.getItem('Token')==="null"){
            return false;
        }
        else{
            return true;
        }
    }
  }
  
  export default new AuthService();