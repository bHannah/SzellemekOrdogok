import Kartya from "./Kartya.js";

export default class Jatekter{
    #lista
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.jatekTerMegjelenit()
    }

    jatekTerMegjelenit(){
        this.#lista.forEach((elem, index) => {
            new Kartya(elem, this.#szuloElem, index)
        })
    }

    beleIr(index, karakter){
        console.log(karakter)
        let eredmenyElem = $('.vegeredmeny')
        eredmenyElem.empty();
        if(karakter === "Ördög"){
            eredmenyElem.append('Vesztettél!')
        }else if(karakter === "Szellem"){
            eredmenyElem.append('Nyertél!')
        }   
    }
}