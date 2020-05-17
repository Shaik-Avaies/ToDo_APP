const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');


router.get('/',mainController.main);

console.log("Router is running");


module.exports = router;