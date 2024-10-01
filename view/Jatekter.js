import Kartya from "./Kartya.js";

export default class Jatekter{
    #lista
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.jatekTerMegjelenit()
    }

    jatekTerMegjelenit(){
        this.#lista.forEach((elem, index) => {
            new Kartya(elem, this.#szuloElem, index)
        })
        console.log('jatekter')
    }
}