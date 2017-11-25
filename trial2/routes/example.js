var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ejemplo', function(err, html) {
  res.send(html);
	});
});
module.exports = router;
