const router = require('express').Router();
const {addJob} = require('../controllers/job');


router.post('/',addJob);




module.exports = router;
