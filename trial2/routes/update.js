var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('update', function(err, html) {
  res.send(html);
	});
});
module.exports = router;
