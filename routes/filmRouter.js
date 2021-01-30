
const films = require('./controller/filmController');
var express = require('express');
var router = express.Router();


// Create a new Film
router.post('/', films.create);

// Retrieve all Films
router.get('/', films.findAll);

// Retrieve a single Film with filmId
router.get('/:filmId', films.findOne);

// Update a Film with filmId
router.put('/:filmId', films.update);

// Delete a Film with filmId
router.delete('/:filmId', films.delete);

module.exports = router;