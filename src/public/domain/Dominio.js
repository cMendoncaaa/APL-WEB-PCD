class Dominio{
    #itens = [];
    #score = 0;
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    addItenDominio(item){
        this.#itens.push(item);
    }

    calculateScoreDominio(){
        this.#itens.forEach(item => {
            this.#score += item.score;
        });
        this.#score = this.#score / this.#itens.length;
        return this.#score;
    }

    toString(){
        this.calculateScoreDominio()
        return(`Id: ${this.id}, \nNome: ${this.name}, \nItens {${this.#itens}},\nPontuação: ${this.#score}`);
    }
}

export default Dominio