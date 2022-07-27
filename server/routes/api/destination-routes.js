const router = require('express').Router();

const {
    getDestinations,
    getDestinationById,
    saveDestination,
    deleteDestination
} = require('../../controllers/destination-controller');
const { authMiddleware } = require('../../utils/auth');


// GET DESTINATIONS AFTER AUTHENTICATION
router.route('/').get(authMiddleware, getDestinations);

// DELETE DESTINATION
// router.route('/destinations/:destId').delete(authMiddleware, deleteDestination);

module.exports = router;