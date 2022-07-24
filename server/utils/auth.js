const jwt = require('jsonwebtoken');
const secret = 'secretpassword';
const expiration = '3h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        console.log('Token:', token);

        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        if (!token) {
            console.log('🌑 There is not a token! Here, passing the original request', req);
            return req;

        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('🚫 This is an invalid token!');
        }

        console.log('🔐 Auth Request: ', req);
        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        // In the log of payload, scroll up to see where the payload is delivered in the body of the request.
        console.log('📄 PAYLOAD:', payload);
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};