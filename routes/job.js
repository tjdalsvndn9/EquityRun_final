const router = require('express').Router();
const {addJob,findJob} = require('../controllers/job');


router.post('/',addJob);
router.get('/:id',findJob);



module.exports = router;
