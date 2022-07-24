import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  // Check if the user is still logged in
  loggedIn() {
    const token = this.getToken();
    console.log('Auth.js ====== 🪙 Login Token: ', token)
    console.log('BOOLEAN - The token is expired...', this.isTokenExpired(token));
    return !!token && !this.isTokenExpired(token);
  }

  // Check if the token expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      console.log('Auth.js ====== 🔐 Decoded Token: ', token);
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
    console.log(localStorage.getItem('id_token'));
    return localStorage.getItem('id_token');
  }

  // Here is saving the user's token to local storage
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    console.log('💾 Setting id-token in local storage:', localStorage.setItem('id_token', idToken));

    console.log('Returning to homepage, now with the updated, logged in UI!');
    window.location.assign('/');
  }

  // Remove token to logout
  logout() {
    localStorage.removeItem('id_token');
    console.log(localStorage.removeItem('id_token'));

    // Reload the page
    window.location.assign('/');
    console.log('👽 Abducted!......you logged out.')
  }
};

export default new AuthService();