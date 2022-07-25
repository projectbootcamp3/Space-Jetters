const router = require('express').Router();
const userRoutes = require('./user-routes');
const rocketRoutes = require('./rocket-routes');
const destinationRoutes = require('./destination-routes');

router.use('/users', userRoutes);
router.use('/rockets', rocketRoutes);
router.use('/destinations', destinationRoutes);

module.exports = router;
