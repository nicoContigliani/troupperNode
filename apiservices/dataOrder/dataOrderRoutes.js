const express = require('express');
const router = express.Router();

const ordeData = require('./dataOrderController')

/* GET users listing. */
router.get('/', ordeData.get)
router.get('/:id', ordeData.getId)
router.post('/', ordeData.post)
router.put('/:id', ordeData.put)
router.delete('/:id', ordeData.deletes)

module.exports = router;
