const Personagem = require('../models/PersonagemModel.js')

module.exports = (app)=>{

app.get('/getAllPersonagens', (req, res) =>{
    res.setHeader('Acess-Control-Allow-Origin', '*')

    const Personagens = new Personagem('Smokkkey','0','Masculino','Humano','-22.12052848415767','-51.40552117831999')

    res.json([
        Personagens.pegarInformacao()
    ])
})

}
