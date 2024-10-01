export default class Model{
    #LISTA = ["","","","","","","","","","","","","","","","","","","",""]

    constructor(){
        this.listaFeltolt()
        this.adatVisszaAd()
    }

    getLista(){
        return this.#LISTA
    }

    listaFeltolt(){
        for (let i = 0; i < this.#LISTA.length; i++) {
            let szam = Math.floor((Math.random() * 100)+1);
            if(szam > 30){
                this.#LISTA[i] = "Szellem"
            }else{
                this.#LISTA[i] = "Ördög"
            }
        }
        console.log(this.#LISTA)
    }

    adatVisszaAd(index){
        return this.#LISTA[index]
    }
}