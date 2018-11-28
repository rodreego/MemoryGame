// Teste de script criado dentro do generators.js | Abra o console com f12 para ver o resultado.
// Lembre-se que o valor final sempre vai retornar o dobro, pois todos os valores vão ser duplicados e depois misturados
console.log(gens.cardTable([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]));


// Quando a página terminar de carregar. O aplicativo vai começar a executar os scripts aqui.
const startApp = function() {

    // gens.body representa de forma totalmente segura o valor $("#game") para ser manipulado pelo jQuery
    gens.body.text("Joguinho");

    // Vamos usar o script que eu fiz para definir que agora podemos mostrar o conteúdo que está dentro da div #game
    // Deste jeito vamos ter uma transição mais elegante e natural para o jogo da página de loading para o game em si
    gens.loading(false, function() {

        console.log("E podemos de forma opcional usar esse callback para fazer alguma coisinha quando a animação de transição de tela terminar.");

    });

};