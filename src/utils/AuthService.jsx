class AuthService {

    getHeader(){
        return {headers: { Authorization: `Bearer ${sessionStorage.getItem('Token')}` }};
    }

    IsLoggedIn() {
        
        const token=sessionStorage.getItem('Token');
        if(token==="null" || token===null){
            return false;
        }
        else{            
            return true;
        }
    }
  }
  
  export default new AuthService();