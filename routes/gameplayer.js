const  express = require('express');
const  router = express.Router();
const gamePlayer = require('../apiservices/gamePlayer/gamePlayerRoutes')
/* GET users listing. */
router.use('/gamePlayer', gamePlayer)
module.exports = router;
