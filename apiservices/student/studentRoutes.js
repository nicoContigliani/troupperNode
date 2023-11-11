const express = require('express');
const router = express.Router();

const student = require('./studentController')

/* GET users listing. */
router.get('/', student.get)
router.get('/:data', student.getId)
router.post('/', student.post)
router.put('/:id', student.put)
router.delete('/:id', student.deletes)

module.exports = router;
