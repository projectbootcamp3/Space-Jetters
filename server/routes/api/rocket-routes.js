const router = require('express').Router();

const {
    getRockets,
    getSingleRocket,
} = require('../../controllers/rocket-controller')

// NOTE: authMiddleware belongs anywhere we need to send a token for verification of user
router.route('/').get(getRockets);

router.route('/rockets/:rocketId').get(getSingleRocket);

module.exports = router;
