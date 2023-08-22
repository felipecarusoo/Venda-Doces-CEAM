var imgBrigadeiro = document.getElementById('imgBrigadeiro');
var imgCupcake = document.getElementById('imgCupcake');
var imgBrownie = document.getElementById('imgBrownie');
var mensssagem = document.getElementById('mensssagem');
var produto = document.getElementById('produto')

imgBrigadeiro.addEventListener('click', function () {
    if (!produto.value.includes('Brigadeiro ')) {
        produto.value += 'Brigadeiro \n';
    }
});

imgCupcake.addEventListener('click', function () {
    if (!produto.value.includes('Cupcake ')) {
        produto.value += 'Cupcake \n';
    }
});

imgBrownie.addEventListener('click', function () {
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