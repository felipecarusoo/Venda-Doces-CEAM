const submitButton = document.getElementById('submit-button');
const thankYouMessage = document.getElementById('thank-you-message');
const pedidoForm = document.getElementById('pedido-form');

var botao1 = document.getElementById('botao1');
var botao2 = document.getElementById('botao2');
var botao3 = document.getElementById('botao3');
var message = document.getElementById('message');
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

function addToCart(productName) {
    if (!products[productName]) {
        products[productName] = 0;
    }

    if (products[productName] < maxQuantity) {
        products[productName]++;
        updateMessage();
    }
}

function updateMessage() {
    pedido.value = '';
    var total = 0;

    for (var productName in products) {
        var count = products[productName];
        var price = prices[productName];
        pedido.value += productName + ' ' + count + 'x\n';
        total += count * price;
    }

    totalField.value = 'R$ ' + total.toFixed(2);
}

submitButton.addEventListener('click', () => {
    // Simula o envio do pedido
    setTimeout(() => {
        pedidoForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    }, 1000); // Tempo de simulação em milissegundos (1 segundo)
});