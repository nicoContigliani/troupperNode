const express = require('express');
const router = express.Router();

const ordeDAta = require('./dataOrderController')

/* GET users listing. */
router.get('/', ordeDAta.get)
router.post('/', ordeDAta.post)

module.exports = router;
