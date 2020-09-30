const router = require('express').Router();
const response = require('../helpers/response');

router.get('/',require('../controllers/vehicleController').getAll);

module.exports = router;
