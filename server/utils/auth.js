const jwt = require('jsonwebtoken');
const secret = 'secretpassword';
const expiration = '3h';

module.exports = {
    authMiddleware: function ({ req }) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        console.log('🪙 Auth Token:', token, '\n\n==============================================================');

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
            console.log('🌑 Oh! This user does not have a token! Here, passing the original request... ', req.body, '\n\n==============================================================');
            return req;
        }

        try {
            // returning the req.body here results in a graphQL query... need to figure out why it's the rockets query
            console.log('...the original request from before: ', req.body, '\n\n==============================================================')
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            console.log('Here is the verified data: ', data, '\n\n==============================================================')
            req.user = data;
            console.log('Here is the user request: ', req.user, '\n\n==============================================================')
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