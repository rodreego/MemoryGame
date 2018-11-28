const gens = {};

// Este script vai clonar qualquer lista de objetos
gens.clone = function(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
};

// Colocar o jogo no modo loading
gens.loading = function(isLoad, callback) {

    if (typeof callback != "function") { callback = function() {}; }

    if (isLoad == false) {
        $("#loading").fadeOut(400);
        $("#game").fadeIn(400, callback);
    } else {
        $("#game").fadeIn(400, callback);
        $("#loading").fadeOut(400);
    }

};

// Gerador de mesa de carts
gens.cardTable = function(cards) {

    // Vamos inserir a array de imagens dentro do "cards" que vai ser inserido e depois clonado aqui dentro.
    var cardslist = [cards, gens.clone(cards)];

    // Os dados processados vão ser todos inseridos aqui dentro
    var cards_selected = [];

    do {

        // O sistema vai sortear um valor dentro da tabela normal e da tabela clonada
        var randomnumber1 = Math.floor(Math.random() * cardslist[0].length);
        var randomnumber2 = Math.floor(Math.random() * cardslist[1].length);

        // Estes números sorteados vão ser inseridos dentro do nosso jogo
        cards_selected.push(cardslist[0][randomnumber1], cardslist[1][randomnumber2])

        // Os valores usados agora vão ser descartados para um novo loop ser realizado com os valores restantes
        cardslist[0].splice(randomnumber1, 1);
        cardslist[1].splice(randomnumber2, 1);

        // O loop vai continuar até todos os valores serem sorteados, assim finalizando a criação da nova array com os dados que vão ser usados dentro do jogo
    } while (cardslist[0].length != 0);

    // Agora vamos finalmente retornar o valor da nossa tabela de cartas gerada para ser usada dentro do do jogo
    return cards_selected;

};

// Esperar a página carregar completamente
$(document).ready(function() {

    // Game Body
    gens.body = $("body > #game");

    // Começar aplicativo do jogo
    if (typeof startApp == "function") { startApp(); }

});