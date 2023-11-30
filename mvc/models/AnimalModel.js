class Animal{

    tamanho
    cor
    raca
    grupo

    constructor(cor, raca, grupo){
        this.cor = cor
        this.raca = raca
        this.grupo = grupo
    }

    andar(){
        console.log('Andou!')
    }

}


let gato = new Animal("Marrom", "Siamês", "Felino")
let cachorro = new Animal("Preto", "Pintcher", "Mamífero")

console.log(gato.cor)
console.log(cachorro.cor+' '+cachorro.raca+' '+cachorro.grupo)
console.log(cachorro.andar())