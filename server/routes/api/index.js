const router = require('express').Router();
const userRoutes = require('./user-routes');
const rocketRoutes = require('./rocket-routes');

router.use('/users', userRoutes);
router.use('/rockets', rocketRoutes);

module.exports = router;
