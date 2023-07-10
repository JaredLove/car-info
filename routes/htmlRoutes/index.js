const path = require('path');
const router = require('express').Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
    });

router.get('/cars', (req, res) => {
        res.sendFile(path.join(__dirname, '../../public/cars.html'));
      });


module.exports = router;