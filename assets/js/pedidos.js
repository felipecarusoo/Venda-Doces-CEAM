const submitButton = document.getElementById('submit-button');
const thankYouMessage = document.getElementById('thank-you-message');
const pedidoForm = document.getElementById('pedido-form');
const btnClear = document.querySelector('.btn-clear');

var imgBrigadeiro = document.getElementById('imgBrigadeiro');
var imgCupcake = document.getElementById('imgCupcake');
var imgBrownie = document.getElementById('imgBrownie');
var pedido = document.getElementById('pedido');
var totalPedido = document.getElementById('total');
var produtos = {};
var prices = {
    'brigadeiro': 1.00,
    'cupcake': 5.00,
    'brownie': 6.00
};
var maxQuantity = 15;

imgBrigadeiro.addEventListener('click', function () {
    addToCart('brigadeiro');
});

imgCupcake.addEventListener('click', function () {
    addToCart('cupcake');
});

imgBrownie.addEventListener('click', function () {
    addToCart('brownie');
});

pedido.addEventListener('input', function () {
    updateCartFromTextarea();
});

function addToCart(productName) {
    if (!produtos[productName]) {
        produtos[productName] = 0;
    }

    if (produtos[productName] < maxQuantity) {
        produtos[productName]++;
        updateMessage();
    }
}

function removeFromCart(productName) {
    if (produtos[productName] && produtos[productName] > 0) {
        produtos[productName]--;
        updateMessage();
    }
}

function limparCarrinho() {
    produtos = {};
    updateMessage();
}

function updateCartFromTextarea() {
    produtos = {}; 
    var lines = pedido.value.trim().split('\n');

    for (var line of lines) {
        var parts = line.split(' ');
        var productName = parts.slice(0, -1).join(' '); 
        var count = parseInt(parts[parts.length - 2]); 
        produtos[productName] = count; 
    }

    updateMessage();
}

function updateMessage() {
    pedido.value = '';
    var total = 0;

    for (var productName in produtos) {
        var count = produtos[productName];
        var price = prices[productName];
        pedido.value += productName + ' ' + count + 'x (' + (count * price).toFixed(2) + ')\n';
        total += count * price;
    }

    totalPedido.value = 'R$ ' + total.toFixed(2);
}

submitButton.addEventListener('click', () => {
    setTimeout(() => {
        pedidoForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }, 1000); 
});


btnClear.addEventListener('click', limparCarrinho);

for (var productName in prices) {
    var removeButton = document.getElementById('remove-' + productName);
    if (removeButton) {
        removeButton.addEventListener('click', function () {
            var productNameToRemove = this.getAttribute('data-product');
            removeFromCart(productNameToRemove);
        });
    }
}
