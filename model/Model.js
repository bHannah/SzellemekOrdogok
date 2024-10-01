export default class Model{
    #LISTA = ["","","","","","","","","","","","","","","","","","","",""]

    constructor(){
        this.karakterRajzol()
    }

    getLista(){
        return this.#LISTA
    }

    karakterRajzol(index){
        this.#LISTA[index] = "szellem"
    }
}