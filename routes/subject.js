const  express = require('express');
const  router = express.Router();
const subject = require('../apiservices/subject/subjectRoutes')
/* GET users listing. */
router.use('/subject', subject)
module.exports = router;
