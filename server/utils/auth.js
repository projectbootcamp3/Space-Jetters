const jwt = require('jsonwebtoken');
const secret = 'secretpassword';
const expiration = '3h';

module.exports = {
  // authenticateToken: function (req, res, next) {
  //   const authHeader = req.headers['authorization'];
  //   const token = authHeader && authHeader.split(' ').pop().trim();

  //   if (token === null) return res.sendStatus(401)

  //   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
  //     if (err) return res.sendStatus(403)
  //     req.user = user
  //     console.log('REQUESTED USER: ', req.user);
  //     next();
  //   })
  // },
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    console.log('🪙  ACCESS TOKEN:', token);

    if (req.headers.authorization) {
      token = token
        // split token string from BEARER
        .split(' ')
        // take the last object in the array and return it (i.e. the token string)
        .pop()
        // trim the whitespace around the token string
        .trim();
    }

    if (!token) {
      console.log('🌑 Oh! This user does not have a token! Here, passing the original request... ', req.body);
      return req;
    }

    try {
      // returning the req.body here results in a graphQL query... need to figure out why it's the rockets query
      const { data } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { maxAge: expiration });
      console.log(`Here is ${req.user.username}'s the verified data: `, data)
      req.user = data;
    } catch {
      console.log('🚫 Tried to verify the token, but it is invalid!');
    }

    // console.log('🔐 Auth Request BODY: ', req.body);
    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    // In the log of payload, scroll up to see where the payload is delivered in the body of the request.
    console.log('📄 PAYLOAD:', payload);
    return jwt.sign({ data: payload }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: expiration });
  }
};