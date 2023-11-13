const express = require('express');
const router = express.Router();

const subject = require('./subjectController')

/* GET users listing. */
router.get('/', subject.get)
router.get('/:id', subject.getId)
router.post('/', subject.post)
router.put('/:id', subject.put)
router.delete('/:id', subject.deletes)

module.exports = router;
