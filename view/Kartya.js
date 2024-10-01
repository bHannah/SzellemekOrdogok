export default class Kartya{
    #obj
    #szuloElem
    #index

    constructor(obj, szuloElem, index) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.#index = index
        this.kartyaMegjelenit()
        this.kattintottElem = $(".kartya:last-child")
        this.#esemenyKezelo()
    }

    kartyaMegjelenit(){
        this.#szuloElem.append(`<div class="card col-sm kartya"></div>`)
        console.log('kartya')
    }

    #esemenyKezelo(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail: this.#index});
            window.dispatchEvent(e);
        })
    }
}