var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Leopardo26",
  database: "intern"
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM DISCIPLINA ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    res.render('testtable', { data:result });
});
});
});
module.exports = router;
