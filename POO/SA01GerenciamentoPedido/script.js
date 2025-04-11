//criar classes
class Cliente{
    #id
    #nome
    constructor(id, nome){
        this.#id = id;
        this.#nome - nome;
    }

    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
}

class Produto{
    #id;
    #nome;
    #preco;
    constructor(id, nome, preco){
        this.#id = id;
        this.#nome;
        this.#preco = preco;
    }
    getId(){
        return this.#id;
    }
    getNome(){
        return this.#nome;
    }
    getPreco(){
        return this.#preco;
    }
}

class Pedido{
    #id;
    #cliente;
    #itens;
    #desconto;
    #total;
    constructor(id, cliente, itens, desconto){
        this.#id = id;
        this.#cliente = cliente;
        this.#itens = itens;
        this.#desconto = desconto;
        this.#total = this.calcularTotal();
    }
    calcularTotal(){
        let total = this.#itens.reduce(
            (acc, item) => acc + (item.produto.getPreco() * item.quantidade), 0
        )
        return total - (total*(this.#desconto/100));
    }
    getId(){
        return this.#id;
    }
    getCliente(){
        return this.#cliente;
    }
    getItens(){
        return this.#itens;
    }
    getDesconto(){
        return this.#desconto;
    }
    getTotal(){
        return this.#total;
    }
}

class SistemaPedidos {
    #clientes;
    #produtos;
    #pedidos;
    constructor(){
        this.#clientes;
        this.#produtos;
        this.#pedidos;
    }

    cadastrarClientes(){
        const nome = document.getElementById("produtoNome").value;
        if(!nome) return alert("Digite um Nome para o Cliente.");
        const cliente = new Cliente(this.#clientes.length+1, nome);
        this.#clientes.push(cliente);
        this.atualizarCliente(); //método para atualizar a lista de clientes no html
        document.getElementById("clienteNome").value = "";
    }

    #atualizarCliente(){
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";

        const selectCliente = document.getElementById("selectCliente");
        selectCliente.innerHTML = '<option value="">Selecione um Cliente</option>';

        //percorrer a lista de clientes e preencher os elementos 
        this.#clientes.forEach( cliente => {
            const li = document.createElement('li');
            li.textContent = cliente.getNome();
            lista.appendChild(li);

            const option = document.createElement("option");
            option.value = cliente.getId();
            option.textContent = cliente.getNome();
            selectCliente.appendChild(option)
        })
    }

    //lista de produtos


    //lista de pedidos 
}