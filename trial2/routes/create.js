var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/', function(req, res, next) {


	if (req.query.discT){
		var v_disc = "'"+(req.query.discT)+"'";
		var v_cantJug = "'"+(req.query.numberT)+"'";
		var v_nom = "'"+req.query.nombreT+"'";
		var v_col ="'"+req.query.colorT+"'";
			req.getConnection(function(err, connection) {
	      if (err) return next(err);
	      
	      return connection.query('INSERT INTO equipo (cod_Disciplina, cant_Jugadores, nombre, Color) VALUES ('+v_disc+', '+v_cantJug+','+v_nom+','+v_col+');', function(err, results) {
	        if (err) return next(err);
	        
	      });
  
		});
				
	}
	res.render('create');
  	
});


module.exports = router;

