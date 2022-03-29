const app=require('./config/server.js'); ///Importação do modulo express do arquivo server.js
const rotaHome=require('./app/routes/home') (app); ///Importação e execução da rota principal
const rotaAdmin=require('./app/routes/admin')(app); ///Importação e execução da rota de formulário
const rotaNoticias=require('./app/routes/noticias')(app); ///Importação e execução da rota notícia

app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});