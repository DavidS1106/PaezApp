class AuthService {

    getHeader(){
        return /*{headers: */{ 
            // 'Access-Control-Allow-Origin': '*',
            // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
            // 'Content-type':'application/x-www-form-urlencoded', 
            Authorization: `Bearer ${sessionStorage.getItem('Token')}`
         //}};
    }}

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