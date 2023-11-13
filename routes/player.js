const  express = require('express');
const  router = express.Router();
const player = require('../apiservices/player/playerRoutes')
/* GET users listing. */
router.use('/player', player)
module.exports = router;
