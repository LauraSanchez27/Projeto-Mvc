const schoolModel = require('../models/schoolModel.js')

module.exports = (app)=>{

app.get('/getAllStudents', (req, res) =>{

    const studentList = []
    
    for (let count = 5; count > 0; count--) {
        const student = studentModel

        student.RA = 101
        student.Nome = "Luisinho"
        student.Hobbie = "Ver Filme"
        student.DtIngressoCurso = "10/08/2025"
        student.Curso = "Back-End"

        studentList.push(student.RegistroJSON())

    }

    res.json(studentList)
})

}


