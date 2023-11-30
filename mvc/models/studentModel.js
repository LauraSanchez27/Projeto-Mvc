const Student = {
    RA: "",
    Nome: "",
    Curso: "",
    DtIngresso: "",
    Hobbie: "",
    VerCarterinha: function(){
        return "Carteirinha "+this.Nome +" RA: "+this.RA
    },
    RegistroJSON: function() {

        return{
        "RA": this.RA,
        "Nome": this.Nome,
        "Curso":this.Curso,
        "DtIngresso":this.DtIngresso,
        "Hobbie":this.Hobbie
    }
    
    }
}

module.exports = Student