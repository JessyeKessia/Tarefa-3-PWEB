class ClienteEspecial extends Cliente {
    private clientesDependentes: Array<ClienteEspecial>;

    constructor(nome:string, cpf: string) {
        super(nome, cpf)
    }

    inserirDependente (dependente: ClienteEspecial):  void {
        this.clientesDependentes.push(dependente);
    }
    removerDependente (cpf: string): void {
        const index = this.clientesDependentes.findIndex(dependente => dependente.cpf === cpf);
        if (index !== -1) {
            this.clientesDependentes.splice(index, 1); 
        } else {
            console.log(`Dependente com CPF ${cpf} não encontrado.`);
        }
    }
    pesquisarDependente (cpf: string): ClienteEspecial {
        return this.clientesDependentes.find(cliente => cliente.cpf === cpf)
    }
}