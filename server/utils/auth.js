const jwt = require('jsonwebtoken');
const expiration = '3h';

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;
    const user = req.body.user;
    console.log('🪙  AUTH TOKEN:', token);
    console.log('USER', user)
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return req;
    }
    try {
      const { data } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { maxAge: expiration });
      console.log(`Here is ${req.user.username}'s the verified data: `, data)
      req.user = data;
    } catch {
      console.log('🚫 Tried to verify the token, but it is invalid!');
    }
    return { req, user };
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    // In the log of payload, scroll up to see where the payload is delivered in the body of the request.
    console.log('📄 PAYLOAD:', payload);
    return jwt.sign({ data: payload }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiration });
  }
};