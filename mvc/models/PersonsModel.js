class Personagem{

    nome
    poder
    genero
    visao

    constructor(nome, poder, genero){
        this.nome = nome
        this.poder = poder
        this.genero = genero
    }

    andar(){
        console.log('Andou!!')
    }
    atirar(){
        console.log('Atirou!!')
    }

    pegarInformacao(){
        return {
            "nome":this.nome,
            "poder":this.poder,
            "genero":this.genero
        }
    }

}

module.exports = Personagem