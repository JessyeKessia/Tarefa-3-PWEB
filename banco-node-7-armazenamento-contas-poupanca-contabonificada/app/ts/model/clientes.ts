class Clientes {

    private clientes: Array<Cliente>;

    constructor() {
        this.clientes = new Array<Cliente>();
    }

    inserir(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    remover(cpf: string): void {
        const clienteRemover = this.pesquisar(cpf);
        if (clienteRemover) {
            const indexCliente = this.clientes.indexOf(clienteRemover);
            if (indexCliente > -1) {
                this.clientes.splice(indexCliente, 1);
            }
        }
    }

    pesquisar(cpf: string): Cliente {
        return this.clientes.find(
            cliente => cliente.cpf === cpf
        );
    }

    listar(): Array<Cliente> {
        return this.clientes;
    }

}
