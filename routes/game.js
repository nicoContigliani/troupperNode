const  express = require('express');
const  router = express.Router();
const game = require('../apiservices/game/gameRoutes')
/* GET users listing. */
router.use('/game', game)
module.exports = router;
