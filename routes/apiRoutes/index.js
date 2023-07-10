const router = require('express').Router();
const carRoutes = require('../apiRoutes/carsRoutes');


router.use(carRoutes);



module.exports = router;