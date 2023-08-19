const submitButton = document.getElementById('submit-button');
const thankYouMessage = document.getElementById('thank-you-message');
const pedidoForm = document.getElementById('pedido-form');
const btnClear = document.querySelector('.btn-clear');

var botao1 = document.getElementById('botao1');
var botao2 = document.getElementById('botao2');
var botao3 = document.getElementById('botao3');
var pedido = document.getElementById('pedido');
var totalField = document.getElementById('total');
var products = {};
var prices = {
    'brigadeiro': 1.00,
    'cupcake': 5.00,
    'brownie': 6.00
};
var maxQuantity = 15;

botao1.addEventListener('click', function () {
    addToCart('brigadeiro');
});

botao2.addEventListener('click', function () {
    addToCart('cupcake');
});

botao3.addEventListener('click', function () {
    addToCart('brownie');
});

pedido.addEventListener('input', function () {
    updateCartFromTextarea();
});

function addToCart(productName) {
    if (!products[productName]) {
        products[productName] = 0;
    }

    if (products[productName] < maxQuantity) {
        products[productName]++;
        updateMessage();
    }
}

function removeFromCart(productName) {
    if (products[productName] && products[productName] > 0) {
        products[productName]--;
        updateMessage();
    }
}

function limparCarrinho() {
    products = {};
    updateMessage();
}

function updateCartFromTextarea() {
    products = {}; 
    var lines = pedido.value.trim().split('\n');

    for (var line of lines) {
        var parts = line.split(' ');
        var productName = parts.slice(0, -1).join(' '); 
        var count = parseInt(parts[parts.length - 2]); 
        products[productName] = count; 
    }

    updateMessage();
}

function updateMessage() {
    pedido.value = '';
    var total = 0;

    for (var productName in products) {
        var count = products[productName];
        var price = prices[productName];
        pedido.value += productName + ' ' + count + 'x (' + (count * price).toFixed(2) + ')\n';
        total += count * price;
    }

    totalField.value = 'R$ ' + total.toFixed(2);
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
