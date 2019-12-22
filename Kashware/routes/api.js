var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/spacex', require('../api/allLaunches').getLaunches);
router.post('/spacexSingle', require('../api/singleLaunch').particularLaunch);
module.exports = router;
