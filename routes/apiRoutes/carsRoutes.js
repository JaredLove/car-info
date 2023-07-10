const router = require('express').Router();
const {filterByQuery, findById, createNewCar, validateCar} = require('../../lib/cars');
const { cars } = require('../../data/cars');



// GET all cars
router.get('/cars', (req, res) => {
    let results = cars;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// GET a single car
router.get('/cars/:id', (req, res) => {
    const result = findById(req.params.id, cars);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});


// POST a car
router.post('/cars', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = cars.length.toString();

    if (!validateCar(req.body)) {
        res.status(400).send('The car is not properly formatted.');
    } else {
        const car = createNewCar(req.body, cars);
        res.json(car);
    }
});


router.delete('/cars/:id', (req, res) => {
    const result = findById(req.params.id, cars);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.put('/cars/:id', (req, res) => {
    const result = findById(req.params.id, cars);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});


module.exports = router;