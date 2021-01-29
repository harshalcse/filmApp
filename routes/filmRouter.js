
const films = require('./controller/filmController');
var express = require('express');
var router = express.Router();


// Create a new Films
router.post('/', films.create);

// Retrieve all Films
router.get('/', films.findAll);

// Retrieve a single Films with filmId
router.get('/:filmId', films.findOne);

// Update a Films with filmId
router.put('/:filmId', films.update);

// Delete a Films with filmId
router.delete('/:filmId', films.delete);

module.exports = router;