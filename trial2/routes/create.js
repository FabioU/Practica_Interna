var express = require('express');
var router = express.Router();
/* GET users listing. */

router.get('/', function(req, res, next) {


	if (req.query.discT){
		var v_disc ="(Select codigo from disciplina where nombre = '"+(req.query.discT)+"')";
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
	if (req.query.discTour){
		var v_discTour ="(Select codigo from disciplina where nombre = '"+(req.query.discTour)+"')";
		var v_nomTour = "'"+(req.query.nomTour)+"'";
		var v_gesTour = "'"+(req.query.gesTour)+"'";
		var v_semTour = "'"+(req.query.semTour)+"'";
		var v_tipoTour = "'"+(req.query.tipoTour)+"'";
			req.getConnection(function(err, connection) {
	      if (err) return next(err);
	      
	      return connection.query('INSERT INTO torneo (cod_Disciplina, nombre, gestion, semestre, tipo) VALUES ('+v_discTour+', '+v_nomTour+','+v_gesTour+','+v_semTour+','+v_tipoTour+');', function(err, results) {
	        if (err) return next(err);
	        
	      });
  
		});
				
	}
	if (req.query.nomDisc){
		var v_nomDisc = "'"+(req.query.nomDisc)+"'";
			req.getConnection(function(err, connection) {
	      if (err) return next(err);
	      
	      return connection.query('INSERT INTO disciplina (nombre) VALUES ('+v_nomDisc+');', function(err, results) {
	        if (err) return next(err);
	        
	      });
  
		});
				
	}

	if (req.query.codEstDepor){
		var v_codEstDepor ="'"+(req.query.codEstDepor)+"'";
		var v_discDepor = "(Select codigo from disciplina where nombre = '"+(req.query.discDepor)+"')";
		var v_equipoDepor = "(Select cod from equipo where nombre = '"+(req.query.equipoDepor)+"')";
		var v_punDepor = "'"+(req.query.punDepor)+"'";
		var v_amonDepor = "'"+(req.query.amonDepor)+"'";
			req.getConnection(function(err, connection) {
	      if (err) return next(err);
	      
	      return connection.query('INSERT INTO deportista (cod_Est,cod_Disciplina,puntos_anotados, cod_equipo, amonestaciones) VALUES ('+v_codEstDepor+', '+v_discDepor+','+v_punDepor+','+v_equipoDepor+','+v_amonDepor+');', function(err, results) {
	        if (err) return next(err);
	      });
  
		});
				
	}

	res.render('create');
  	
});


module.exports = router;

