const router = require('express-promise-router')();
const potHoleController = require('../controllers/pothole.controller');


router.post('/create/potholes', potHoleController.createPotHole);
router.get('/potholes', potHoleController.getAllPotHole);
router.get('/potholes/:id', potHoleController.getPotHoleByID);
router.put('/potholes/:id', potHoleController.updatePotHoleByID);
router.delete('/potholes/:id', potHoleController.deletePotHoleByID);
module.exports = router;