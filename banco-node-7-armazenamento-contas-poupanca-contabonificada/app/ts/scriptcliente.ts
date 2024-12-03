let clienteController = new ClienteController();

clienteController.listar();

const cli = new Cliente('Jessye', '12343');

console.log('Cliente: ' + cli.nome + cli.cpf);