// Estado da aplicação (Simulando o BD localmente antes do Fetch)
let produtos = [];
let totalVendas = 0;

const form = document.getElementById('form-produto');
const listaHTML = document.getElementById('lista-produtos');
const displayTotal = document.getElementById('total-caixa');

// FUNCIONALIDADE: Cadastrar
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const novoProduto = {
        id: Date.now(), // ID temporário
        nome: document.getElementById('nome').value,
        categoria: document.getElementById('categoria').value,
        preco: parseFloat(document.getElementById('preco').value),
        estoque: parseInt(document.getElementById('estoque').value),
        descricao: document.getElementById('descricao').value
    };

    produtos.push(novoProduto);
    form.reset();
    renderizarProdutos(produtos);
});

// FUNCIONALIDADE: Listar e Renderizar
function renderizarProdutos(lista) {
    listaHTML.innerHTML = '';
    
    lista.forEach(prod => {
        const li = document.createElement('li');
        li.className = 'item-produto';
        li.innerHTML = `
            <div>
                <strong>${prod.nome}</strong> - R$ ${prod.preco.toFixed(2)} 
                <br><small>Estoque: ${prod.estoque} | ${prod.categoria}</small>
            </div>
            <div>
                <button class="btn-vender" onclick="registrarVenda(${prod.id})">Vender</button>
                <button class="btn-excluir" onclick="excluirItem(${prod.id})">x</button>
            </div>
        `;
        listaHTML.appendChild(li);
    });
}

// FUNCIONALIDADE: Buscar (Filtro)
function filtrarProdutos() {
    const termo = document.getElementById('busca').value.toLowerCase();
    const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
    renderizarProdutos(filtrados);
}

// FUNCIONALIDADE: Registrar Venda
function registrarVenda(id) {
    const produto = produtos.find(p => p.id === id);
    
    if (produto && produto.estoque > 0) {
        produto.estoque--;
        totalVendas += produto.preco;
        
        displayTotal.innerText = `R$ ${totalVendas.toFixed(2)}`;
        renderizarProdutos(produtos);
    } else {
        alert("Produto fora de estoque!");
    }
}

// FUNCIONALIDADE: Excluir
function excluirItem(id) {
    produtos = produtos.filter(p => p.id !== id);
    renderizarProdutos(produtos);
}