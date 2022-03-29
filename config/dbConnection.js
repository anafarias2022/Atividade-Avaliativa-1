const mysql=require('mysql');///Importação do módulo

module.exports=function(){
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	}); ///Cria conexão com o banco de dados portal_notícias
}