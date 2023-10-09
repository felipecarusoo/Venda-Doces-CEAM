document.addEventListener('DOMContentLoaded', function () {
    const imgBrigadeiro = document.getElementById('imgBrigadeiro');
    const imgCupcake = document.getElementById('imgCupcake');
    const imgBrownie = document.getElementById('imgBrownie');
    const produto = document.getElementById('produto');
    const ratingButtons = document.querySelectorAll('.rating-button');
    const hiddenAvaliacao = document.getElementById('avaliacao');
    const message = document.getElementById('message');

    imgBrigadeiro.addEventListener('click', function () {
        if (!produto.value.includes('Brigadeiro')) {
            if (produto.value.length > 0) {
                produto.value += ', ';
            }
            produto.value += 'Brigadeiro';
        }
    });

    imgCupcake.addEventListener('click', function () {
        if (!produto.value.includes('Cupcake')) {
            if (produto.value.length > 0) {
                produto.value += ', ';
            }
            produto.value += 'Cupcake';
        }
    });

    imgBrownie.addEventListener('click', function () {
        if (!produto.value.includes('Brownie')) {
            if (produto.value.length > 0) {
                produto.value += ', ';
            }
            produto.value += 'Brownie';
        }
    });

    ratingButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            hiddenAvaliacao.value = value;
            ratingButtons.forEach(btn => {
                if (btn.value <= value) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            switch (value) {
                case '1':
                    message.value = 'Muito ruim';
                    break;
                case '2':
                    message.value = 'Ruim';
                    break;
                case '3':
                    message.value = 'Regular';
                    break;
                case '4':
                    message.value = 'Bom';
                    break;
                case '5':
                    message.value = 'Excelente';
                    break;
                default:
                    message.value = '';
            }
        });
    });
});
