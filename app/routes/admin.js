module.exports=function(app){ ///Rota para a página do formulário de inclusão de notícia
app.get('/formularioinclusaonoticia',(req,res)=>{
	res.render('admin/form_add_noticia.ejs');
});
}