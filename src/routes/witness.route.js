const router = require('express-promise-router')();
const witnessController = require('../controllers/witness.controller');

router.post('/witness/potholes', witnessController.witnessPotHole);
// router.post('/create/potholes', potHoleController.createPotHole);


module.exports = router;