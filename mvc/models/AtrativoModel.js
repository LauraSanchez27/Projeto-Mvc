class Atrativo{

    nome
    foto
    latitude
    longitude
    descricao

    constructor(nome, foto, latitude, longitude, descricao){
        this.nome = nome
        this.foto = foto
        this.latitude = latitude
        this.longitude = longitude
        this.descricao = descricao
    }

    cadastrarAtrativo(){}
    deletarAtrativo(){}
    atualizarAtrativo(){}
    buscarAtrativo(){}
    buscarTodosAtrativos(){}

    pegarInformacao(){
        return {
            "nome":this.nome,
            "foto":this.foto,
            "latitude":this.latitude,
            "logintude":this.logintude,
            "descricao":this.descricao
        }
    }

}

module.exports = Atrativo