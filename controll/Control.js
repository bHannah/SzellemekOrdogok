import Jatekter from "../view/Jatekter.js";
import Model from "../model/Model.js";

export default class Control{
    constructor(){
        this.szuloElem = $('.jatekter')
        this.model = new Model()
        this.jatekter = new Jatekter(this.model.getLista(), this.szuloElem)
        this.#esemenykezelo()
    }

    #esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            let karakter = this.model.adatVisszaAd(event.detail)
            this.jatekter.beleIr(event.detail, karakter)
        });
    }
}