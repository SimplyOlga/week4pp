const express = require('express');
const router = express.Router();

const { getAllTours } = require('../controllers/tourControllers');
const auth = require('../middleware/auth');

router.get('/', getAllTours);
router.get('/:tourId', getTourById);

router.use(auth);

router.post('/', createTour);
router.put('/:tourId', updateTour);
router.delete('/:tourId', deleteTour);

module.exports = router;