const  express = require('express');
const  router = express.Router();
const student = require('../apiservices/student/studentRoutes')
/* GET users listing. */
router.use('/student', student)
module.exports = router;
