const Atrativo = require('../models/AtrativoModel.js')

module.exports = (app)=>{

app.get('/getAllAtrativos', (req, res) =>{
    res.setHeader('Acess-Control-Allow-Origin', '*')

    const Pruden = new Atrativo('PrudenShopping','prudenshopping.jpg','-22.11494348885081','-51.407489270344676','Lugar com varias lojas e usado para passeio pelas familias no final de semana')

    res.json([
        Pruden.pegarInformacao()
    ])
})

}
