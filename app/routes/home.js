module.exports=function(app){ ///Rota para a página principal do app
	app.get('/',function (req,res) {
		res.render('home/index.ejs');
		
	});
}