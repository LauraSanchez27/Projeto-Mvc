const School = {
    End: "",
    Nome: "",
    Diretor: "",
    Telefone: "",
    Cnpj: "",
    VerCarterinha: function(){
        return "A Escola "+this.Nome +" com o CNPJ "+this.Cnpj+" tem o endereço "+this.End+" com o telefone "+this.Telefone+" e quem comanda a diretoria é "+this.Diretor
    },
    RegistroJSON: function() {

        return{
        "End": this.End,
        "Nome": this.Nome,
        "Diretor":this.Diretor,
        "Telefone":this.Telefone,
        "Cnpj":this.Cnpj
    }
    
    }
}

module.exports = School