const router = require('express').Router();

const {
    createUser,
    getSingleUser,
    saveDestination,
    login
} = require('../controllers/user-controller')

const { authMiddleware } = require('../utils/auth');

// NOTE: authMiddleware belongs anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, saveDestination);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

router.route('/destinations/:destId').delete(authMiddleware, saveDestination);

module.exports = router;
