const express = require('express');
const router = express.Router();
const cowboyController = require('../controllers/cowboyController');

router.get('/cowboys', cowboyController.getAllCowboys);
router.get('/cowboy/:id', characterController.getSingleCowboy);
router.post('/cowboys', characterController.createCowboy);
router.delete('/cowboy/:id', characterController.deleteCowboy);

module.exports = router;
