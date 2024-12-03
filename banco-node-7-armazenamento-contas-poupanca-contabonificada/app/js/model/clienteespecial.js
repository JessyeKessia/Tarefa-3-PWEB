class ClienteEspecial extends Cliente {
    constructor(nome, cpf) {
        super(nome, cpf);
    }
    inserirDependente(dependente) {
        this.clientesDependentes.push(dependente);
    }
    removerDependente(cpf) {
        const index = this.clientesDependentes.findIndex(dependente => dependente.cpf === cpf);
        if (index !== -1) {
            this.clientesDependentes.splice(index, 1);
        }
        else {
            console.log(`Dependente com CPF ${cpf} não encontrado.`);
        }
    }
    pesquisarDependente(cpf) {
        return this.clientesDependentes.find(cliente => cliente.cpf === cpf);
    }
}
