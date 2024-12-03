class Cliente {
    constructor(nome, cpf, conta = null) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }
}
