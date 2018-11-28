/* 

Todo o script do jogo vai ser escrito aqui para ficar mais organizado do restinho do sistema do aplicativo.
Está função de começar o jogo sempre vai ser chamada no momento exato que for clicado o botão "Jogar"

*/

const memoryGame = {

    // Aqui é onde o jogo salva a tabela de cartas
    cards: [],

    // Aqui é onde fica salvo quais cartas estão sendo viradas e revidas
    selected: {
        c1: null,
        c2: null
    },

    // Checar situação do jogo
    check: function() {



    },

    // Aqui é o sistema de validar cartas
    detector: {

        // Aqui fica registrado o temporizador de carta visivel
        timeout: null,

        // Aqui é a função
        action: function() {

            // As cartas são iguais? Então vamos contar o ponto
            if (
                (memoryGame.selected.c1 != null) &&
                (memoryGame.selected.c2 != null) &&
                (memoryGame.selected.c1.data("tinycard") == memoryGame.selected.c2.data("tinycard"))
            ) {

                // Vamos remover as duas cartas do jogo
                memoryGame.selected.c1.remove();
                memoryGame.selected.c2.remove();

                // Devolvemos o valor null para os slots
                memoryGame.selected.c1 = null;
                memoryGame.selected.c2 = null;

                // E depois checar se ainda a partida vai continuar ou terminar
                memoryGame.check();

            }

            // Não? Então volta tudo...
            else {

                if (memoryGame.selected.c1 != null) { memoryGame.selected.c1.css("background-image", ""); }
                if (memoryGame.selected.c2 != null) { memoryGame.selected.c2.css("background-image", ""); }
                memoryGame.selected.c1 = null;
                memoryGame.selected.c2 = null;

            }

        }

    },

    // Quando a carta é clicada, está função vai ser executada
    click: function() {

        // Primeiro vamos checar se ela já foi selecionada em um dos dois slots
        if (
            (
                (memoryGame.selected.c1 == null) ||
                (memoryGame.selected.c1.data("tinycard") != $(this).data("tinycard")) ||
                (memoryGame.selected.c1.data("tinyposition") != $(this).data("tinyposition"))
            ) &&
            (
                (memoryGame.selected.c2 == null) ||
                (memoryGame.selected.c2.data("tinycard") != $(this).data("tinycard")) ||
                (memoryGame.selected.c2.data("tinyposition") != $(this).data("tinyposition"))
            )
        ) {

            // Agora podemos colocar ela em um dos slotes e mostrar
            if ((memoryGame.selected.c1 == null) || (memoryGame.selected.c2 == null)) {
                $(this).css("background-image", "url('./cards/" + $(this).data("tinycard") + ".jpeg')");
            }

            if (memoryGame.selected.c1 == null) {
                memoryGame.selected.c1 = $(this);
            } else if (memoryGame.selected.c2 == null) {

                memoryGame.selected.c2 = $(this);

                // Quando for o segundo slot, a gente precisa comparar eles

                // O usuário precisa de alguns segundos para ver a carta antes de comparar
                memoryGame.detector.timeout = setTimeout(memoryGame.detector.action, 2000);

            }

            // Caso os dois exista. Vamos forçar o timeout
            else {

                if (memoryGame.detector.timeout) {
                    clearTimeout(memoryGame.detector.timeout);
                    memoryGame.detector.action();
                }

            }

        }

        // Caso já esteja selecionada, vamos apenas destampar ela
        else {

            // E checar se existe timeout para não deixar o sistema bugar
            if (memoryGame.detector.timeout) {
                clearTimeout(memoryGame.detector.timeout);
                memoryGame.detector.action();
            } else {

                $(this).css("background-image", "");

                if (memoryGame.selected.c1.data("tinyposition") == $(this).data("tinyposition")) {
                    memoryGame.selected.c1 = null;
                } else if (memoryGame.selected.c2.data("tinyposition") == $(this).data("tinyposition")) {
                    memoryGame.selected.c2 = null;
                }

            }

        }

    },

    // O aplicativo do jogo está aqu
    app: function(data) {

        // Vamos converter o valor do input para número e em seguida usa-lo para formar a tabela de cartas do jogo
        data.cards = gens.getCards(Number(data.cards));
        memoryGame.cards = [];
        console.log(data.cards);

        // Vamos começat a gerar as cartas aqui. Cada carta vai ter sua ID salva dentro de si em uma variavel chamada tinycard
        for (var i = 0; i < data.cards.length; i++) {
            memoryGame.cards.push(
                $("<div>", { class: "card" }).data("tinyposition", i).data("tinycard", data.cards[i]).click(memoryGame.click)
            );
        }

        // Gerador da página
        gens.body.html(

            // O Container do jogo
            $("<div>", { class: "game container" }).append(

                // Nosso jogo está acontecendo aqui dentro
                $("<div>", { class: "cardlist" }).append(memoryGame.cards)

            )

        );


        // Quando a página terminar de aparecer e aparecer, alguma coisinha pode acontecer aqui
        gens.loading(false, function() {



        });

    }

};