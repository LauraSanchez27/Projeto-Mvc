const schoolModel = require('../models/schoolModel.js')
module.exports = (app)=>{

app.get('/getAllSchool', (req,res) => {

    const schoolList = []

    for(let count = 5; count > 0; count--){
        const school = schoolModel

        school.End = "José Rainho Teixeira, 72 - Vila Marcondes"
        school.Name = "Escola Estadual Doutor José Fóz"
        school.Diretor = "Mara"
        school.Telefone = "(18) 3221-0840"
        school.Cnpj = "48.811.756/0001-47"

        schoolList.push(school.RegistroJSON())

    }

    res.json(schoolList)

})

}

