// JavaScript

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const thankYouMessage = document.getElementById('thank-you-message');
    const pedidoForm = document.getElementById('pedido-form');
    const btnClear = document.querySelector('.btn-clear');

    const imgBrigadeiro = document.getElementById('imgBrigadeiro');
    const imgCupcake = document.getElementById('imgCupcake');
    const imgBrownie = document.getElementById('imgBrownie');
    const pedido = document.getElementById('pedido');
    const totalPedido = document.getElementById('total');
    
    const produtos = {};
    const prices = {
        'brigadeiro': 1.00,
        'cupcake': 5.00,
        'brownie': 6.00
    };
    const maxQuantity = 15;

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
        for (const productName in produtos) {
            produtos[productName] = 0;
        }
        updateMessage();
    }

    function updateCartFromTextarea() {
        produtos = {};
        const lines = pedido.value.trim().split('\n');

        for (const line of lines) {
            const parts = line.split(' ');
            const productName = parts.slice(0, -1).join(' ');
            const count = parseInt(parts[parts.length - 2]);
            produtos[productName] = count;
        }

        updateMessage();
    }

    function updateMessage() {
        pedido.value = '';
        let total = 0;

        for (const productName in produtos) {
            const count = produtos[productName];
            const price = prices[productName];
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

    for (const productName in prices) {
        const removeButton = document.getElementById('remove-' + productName);
        if (removeButton) {
            removeButton.addEventListener('click', function () {
                const productNameToRemove = this.getAttribute('data-product');
                removeFromCart(productNameToRemove);
            });
        }
    }
});
