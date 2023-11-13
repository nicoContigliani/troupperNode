const express = require('express');
const router = express.Router();

const game = require('./gameController')

/* GET users listing. */
router.get('/', game.get)
router.get('/:id', game.getId)
router.post('/', game.post)
router.put('/:id', game.put)
router.delete('/:id', game.deletes)

module.exports = router;
