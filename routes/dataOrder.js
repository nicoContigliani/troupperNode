const  express = require('express');
const  router = express.Router();
const dataOrder = require('../apiservices/dataOrder/dataOrderRoutes')
/* GET users listing. */
router.use('/order', dataOrder)
module.exports = router;
