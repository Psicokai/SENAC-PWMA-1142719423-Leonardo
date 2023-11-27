function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.style.display = "block";
    welcomeMessage.style.display = "none";
}

function showWelcomeMessage() {
    var loginForm = document.getElementById("loginForm");
    var welcomeMessage = document.getElementById("welcomeMessage");

    loginForm.style.display = "none";
    welcomeMessage.style.display = "block";
}

function login(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "leo.kaique@hotmail.com" && password === "leo123") {
        alert("Login bem-sucedido!");
        showWelcomeMessage();
    } else {
        alert("Login falhou. Verifique seu usuário e senha.");
    }
}
// Simulação de banco de dados
var produtos = [
    { id: 1, nome: 'Processador Intel Core i9', preco: 1500, imagem: 'processador.jpg' },
    { id: 2, nome: 'Placa de Vídeo NVIDIA GeForce RTX 3080', preco: 2500, imagem: 'rtx3080.jpg' },
    { id: 3, nome: 'Memória RAM Corsair Vengeance RGB Pro 32GB', preco: 500, imagem: 'ram.jpg' },
    { id: 4, nome: 'SSD Samsung 1TB', preco: 300, imagem: 'ssd.jpg' },
    { id: 5, nome: 'Monitor LG UltraWide 34"', preco: 1200, imagem: 'monitor.jpg' },
    { id: 6, nome: 'Teclado Mecânico Corsair K95 RGB Platinum', preco: 400, imagem: 'teclado.jpg' },
    { id: 7, nome: 'Mouse Logitech G Pro Wireless', preco: 150, imagem: 'mouse.jpg' },
    { id: 8, nome: 'Headset HyperX Cloud II', preco: 200, imagem: 'headset.jpg' },
];

// Função para exibir produtos na lista
function exibirProdutos() {
    var listaProdutos = document.getElementById("listaProdutos");

    produtos.forEach(function (produto) {
        var li = document.createElement("li");
        li.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" width="50">
            <span>${produto.nome}</span>
            <span>R$ ${produto.preco.toFixed(2)}</span>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        listaProdutos.appendChild(li);
    });
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(produtoId) {
    var produto = produtos.find(p => p.id === produtoId);

    // Verifica se o carrinho de compras está definido
    if (!window.carrinhoDeCompras) {
        window.carrinhoDeCompras = [];
    }

    if (produto) {
        // Verifica se o produto já está no carrinho
        var itemCarrinho = window.carrinhoDeCompras.find(item => item.produto.id === produtoId);

        if (itemCarrinho) {
            itemCarrinho.quantidade++;
        } else {
            window.carrinhoDeCompras.push({ produto, quantidade: 1 });
        }

        // Atualiza a exibição do carrinho na página atual
        exibirCarrinho();

        // Chama a função para atualizar o carrinho na página pai (index.html)
        if (window.parent && window.parent.atualizarCarrinho) {
            window.parent.atualizarCarrinho(window.carrinhoDeCompras);
        }
    }
}

// Função para exibir carrinho de compras
function exibirCarrinho() {
    var listaCarrinho = document.getElementById("listaCarrinho");
    listaCarrinho.innerHTML = ""; // Limpa o conteúdo atual

    window.carrinhoDeCompras.forEach(function (item) {
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${item.produto.nome}</span>
            <span>Quantidade: ${item.quantidade}</span>
            <span>Valor: R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</span>
        `;
        listaCarrinho.appendChild(li);
    });
}

// Função para atualizar carrinho na página index.html
function atualizarCarrinho(carrinhoDeCompras) {
    var listaCarrinho = document.getElementById("listaCarrinho");
    listaCarrinho.innerHTML = ""; // Limpa o conteúdo atual

    carrinhoDeCompras.forEach(function (item) {
        var li = document.createElement("li");
        li.innerHTML = `
            <span>${item.produto.nome}</span>
            <span>Quantidade: ${item.quantidade}</span>
            <span>Valor: R$ ${(item.produto.preco * item.quantidade).toFixed(2)}</span>
        `;
        listaCarrinho.appendChild(li);
    });
}
