class ItenDominio {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }

    toString() {
        return(`Id: ${this.id}, Nome: ${this.name}, Pontuação: ${this.score}`);
    }
}

export default ItenDominio