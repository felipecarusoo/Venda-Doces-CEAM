var botao1 = document.getElementById('botao1');
var botao2 = document.getElementById('botao2');
var botao3 = document.getElementById('botao3');
var message = document.getElementById('message');
var produto = document.getElementById('produto')

botao1.addEventListener('click', function () {
    if (!produto.value.includes('Brigadeiro ')) {
        produto.value += 'Brigadeiro \n';
    }
});

botao2.addEventListener('click', function () {
    if (!produto.value.includes('Cupcake ')) {
        produto.value += 'Cupcake \n';
    }
});

botao3.addEventListener('click', function () {
    if (!produto.value.includes('Brownie ')) {
        produto.value += 'Brownie \n';
    }
});


const ratingButtons = document.querySelectorAll('.rating-button');
const hiddenAvaliacao = document.getElementById('avaliacao');

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        hiddenAvaliacao.value = button.value;
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});