const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    // Turns <"Authorization:" "Bearer eaid7a8sdg6a...>" into just the token eaid7a8sdg6aasdfyasdga
    const token = authHeader.split().pop().trim();
    if (!token || token === '') {
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'this is a secret');
    } catch {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.token.id = decodedToken.id
    next();
}