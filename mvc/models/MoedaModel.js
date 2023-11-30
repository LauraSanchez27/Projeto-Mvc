class Moeda{

    nome
    valor
    imagem

    constructor(nome, valor, imagem, tipo, latitude,longitude){
        this.nome = nome
        this.valor = valor
        this.imagem = imagem
    }

    cadastrarMoeda(){}
    deletarMoeda(){}
    atualizarMoeda(){}
    buscarMoeda(){}
    buscarTodasMoedas(){}

    pegarInformacao(){
        return {
            "nome":this.nome,
            "valor":this.valor,
            "imagem":this.imagem
        }
    }

}

module.exports = Moeda