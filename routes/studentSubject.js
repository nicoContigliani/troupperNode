const  express = require('express');
const  router = express.Router();
const student = require('../apiservices/studentSubject/studentSubjectRoutes')
/* GET users listing. */
router.use('/student', student)
module.exports = router;
