var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/create?disc*', function (req,res,next){
	console.log("hi");
	next();
});
router.get('/create', function(req, res, next) {

  res.render('create');
});


module.exports = router;

