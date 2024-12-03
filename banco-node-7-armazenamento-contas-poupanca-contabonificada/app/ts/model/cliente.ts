class Cliente {

    private _nome: string;
    private _cpf: string;
    private _conta: Conta;

    constructor(nome: string, cpf: string, conta: Conta = null) {
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


    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf}`;
    }
}
