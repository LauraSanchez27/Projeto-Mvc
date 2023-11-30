const Person = require('../models/PersonsModel.js')

module.exports = (app)=>{
    
    app.get('/getAllPersons', (req, res) =>{
    
        res.json({
            "status":"OK"
        })

    })

}

