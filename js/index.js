// Aqui é o object de valores do jogo que eu já escrevi um script para trabalhar com eles antes do startApp ser ativado
gens.game = {

    // Aqui eu estou armazenando o nome das cartas que vão ser usadas, neste caso eu coloquei o nome de todas ela de número para ficar mais simples de trabalhar
    // Se quiser adicionar mais, basta colocar aqui. Esta lista também vai definir sozinha o limite de cartas no jogo
    // Todos os arquivos vão abertos em jpg. Exemplo: O valor 1 vai carregar o arquivo 1.jpg
    cards: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
    ],

    // Por favor, coloque aqui dentro o diretório de todos os arquivos de imagens para ser salvos na cache antes do aplicativo iniciar o startApp
    // Estes arquivos vão sidos da pasta img
    imgs: [
        'favicon.png'
    ]

};


// Quando a página terminar de carregar. O aplicativo vai começar a executar os scripts aqui.
const startApp = function() {

    // Exibir Menu do jogo
    gens.loading(false);

};