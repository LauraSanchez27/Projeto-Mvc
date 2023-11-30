const Moeda = require('../models/MoedaModel.js')

module.exports = (app)=>{

app.get('/getAllMoeda', (req, res) =>{
    res.setHeader('Acess-Control-Allow-Origin', '*')

    const Moedas = new Moeda('TripCoin','1','TripCoin.jpg')

    res.json([
        Moedas.pegarInformacao()
    ])
})

}
