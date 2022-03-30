module.exports = (app) =>{
    var conexao = require('../config/database')
    conexao()
    var mygrid = require('../models/mygrid')
    app.get('/mygrid',async(req,res)=>{
        var resultado = await mygrid.find()
        res.render('mygrid.ejs',{dados:resultado})
        console.log(resultado)
    })
    app.post('/mygrid', (req,res)=>{
        var documento = new mygrid({
            titulo:req.body.titulo,
            texto:req.body.texto
        }).save()
        .then(()=>{res.redirect('/mygrid')})
        .catch(()=>{res.send('Nao foi possivel gravar')})
    })
}