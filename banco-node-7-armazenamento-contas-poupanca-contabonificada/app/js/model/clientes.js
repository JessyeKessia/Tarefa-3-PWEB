class Clientes {
    constructor() {
        this.clientes = new Array();
    }
    inserir(cliente) {
        this.clientes.push(cliente);
    }
    remover(cpf) {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indexCliente = this.clientes.indexOf(clienteRemover);
            if (indexCliente > -1) {
                this.clientes.splice(indexCliente, 1);
            }
        }
    }
    pesquisar(cpf) {
        return this.clientes.find(cliente => cliente.cpf === cpf);
    }
    listar() {
        return this.clientes;
    }
}
