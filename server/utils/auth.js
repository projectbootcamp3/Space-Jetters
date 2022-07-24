const jwt = require('jsonwebtoken');
const secret = 'secretpassword';
const expiration = '3h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        console.log('🪙 Auth Token:', token, '\n\n==============================================================');

        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        if (!token) {
            console.log('🌑 Oh! This user does not have a token! Here, passing the original request... ', req.body, '\n\n==============================================================');
            return req;

        }

        try {
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('🚫 Tried to verify the token, but it is invalid!');
        }

        console.log('🔐 Auth Request BODY: ', req.body, '\n\n==============================================================');
        return req;
    },
    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };
        // In the log of payload, scroll up to see where the payload is delivered in the body of the request.
        console.log('📄 PAYLOAD:', payload, '\n\n==============================================================');
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};