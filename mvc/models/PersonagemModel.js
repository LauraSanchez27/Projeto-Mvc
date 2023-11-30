class Personagem{

    nome
    startMoeda
    genero
    tipo
    latitude
    longitude

    constructor(nome, startMoeda, genero, tipo, latitude,longitude){
        this.nome = nome
        this.startMoeda = startMoeda
        this.genero = genero
        this.tipo = tipo
        this.latitude = latitude
        this.longitude = longitude
    }

    cadastrarPersonagem(){}
    deletarPersonagem(){}
    atualizarPersonagem(){}
    buscarPersonagem(){}
    buscarTodosPersonagens(){}

    pegarInformacao(){
        return {
            "nome":this.nome,
            "startMoeda":this.startMoeda,
            "genero":this.genero,
            "tipo":this.tipo, 
            "latitude":this.latitude,
            "longitude":this.longitude
        }
    }

}

module.exports = Personagem