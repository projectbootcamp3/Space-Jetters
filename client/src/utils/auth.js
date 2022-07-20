import decode from 'jwt-decode';

class AuthService {
    getProfile() {
      return decode(this.getToken());
    }
  
    // Check if the user is still logged in
    loggedIn() {
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    }
  
    // Check if the token expired
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  
    // Get the data from the local storage
    getToken() {
      return localStorage.getItem('id_token');
    }

    // Here is saving the user's token to local storage
    login(idToken) {
      localStorage.setItem('id_token', idToken);
  
      window.location.assign('/');
    }
  
    // Remove token to logout
    logout() {
    
      localStorage.removeItem('id_token');
     // Reload the page
      window.location.assign('/');
    }
};

export default new AuthService();