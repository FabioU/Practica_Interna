var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.getConnection(function(err, connection) {
      if (err) return next(err);
      
      connection.query('SELECT * FROM DISCIPLINA', function(err, results) {
        if (err) return next(err);
        res.render('testtable', { data: results });
      });
  
});
});
module.exports = router;
