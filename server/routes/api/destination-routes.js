const router = require('express').Router();

const {
    getDestinations,
    getDestinationById,
    saveDestination,
    deleteDestination
} = require('../../controllers/destination-controller')



// GET DESTINATIONS AFTER AUTHENTICATION
router.route('/destinations').get(authenticateToken, getMyDestinations);

// DELETE DESTINATION
router.route('/destinations/:destId').delete(authMiddleware, saveDestination);

module.exports = router;