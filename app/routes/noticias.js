const dbConnection = require('../../config/dbConnection');
module.exports=function(app){

	var connection=dbConnection();

	app.get('/noticias',function(req,res){
		const mysql=require('mysql');
		const connection=mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'ifms',
			database:'portal_noticias'
		});

		connection.query('select * from noticias',function(error,result){
			if (error){
				console.log(error);
			}
			res.render('noticias/noticias.ejs',{noticias:result});
	     });
	});
}