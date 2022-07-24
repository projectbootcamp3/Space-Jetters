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
      console.log('Auth.js ====== 🔐 Decoded Token: ', decoded, '\n\n==============================================================');
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
    console.log('GETTING TOKEN FROM LOCAL STORAGE', '\n\n==============================================================')
    return localStorage.getItem('id_token');
  }

  // Here is saving the user's token to local storage
  login(idToken) {
    localStorage.setItem('id_token', idToken);

    console.log('💾 Setting id-token in local storage:', idToken, '\n\n==============================================================');

    window.location.assign('/');
    console.log('Returning to homepage, now with the updated, logged in UI!', '\n\n==============================================================');
  }

  // Remove token to logout
  logout() {
    console.log('USER LOGGED OUT -- Removing the idToken from local storage')
    console.log('The id token for this user has been removed from local storage because they have has logged out', '\n\n==============================================================');
    localStorage.removeItem('id_token');

    // Reload the page
    window.location.assign('/');
    console.log('👽 Abducted!......you logged out.', '\n\n==============================================================')
  }
};

export default new AuthService();