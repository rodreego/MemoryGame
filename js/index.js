// Configurações da engine do jogo

// Aqui é o object de valores do jogo que eu já escrevi um script para trabalhar com eles antes do startApp ser ativado


// Lista de Pages do jogo dentro de suas IDs para serem executadas.
gens.game.pages = {



    // O sistema do jogo está dentro do arquivo game.js
    game: memoryGame.app,


    // Menu Principal
    mainMenu: function() {

        // Configurador de Cartas para jogar. Este painel reconhece sozinho  quantas cartas estão instaladas no jogo
        var totalCards = $("<span>").text(String(gens.game.cards.length * 2) + " Cartas no total");
        var Cardsmount = $("<input>", { type: "number", min: 1, max: gens.game.cards.length, class: "form-control" }).val(gens.game.cards.length).change(function() {

            if (Number($(this).val()) > Number($(this).attr("max"))) {

                $(this).val($(this).attr("max"));

            } else if (Number($(this).val()) < Number($(this).attr("min"))) {

                $(this).val($(this).attr("min"));

            }

            totalCards.text(String(Number($(this).val()) * 2) + " Cartas no total");

        });

        // Gerar Menu dentro da página do jogo
        gens.body.html(

            // O Container do menu
            $("<div>", { class: "menu container" }).append(

                // Logo do Jogo
                $("<div>", { class: "logo", title: "Logo" }),

                // Painelzinho de Número de Cartas
                $("<div>", { class: "cardnumber" }).append([
                    $("<div>").text("Escolha uma quantidade de cartas"),
                    totalCards, Cardsmount
                ]),

                // Butão de iniciar o jogo
                $("<button>", { class: "btn btn-primary btn-lg btn-block" }).text("Jogar").click(function() {
                    gens.body.fadeOut(400, function() { gens.pages("game", { cards: $(Cardsmount).val() }); });
                }),

                // Lista de pontuações
                $("<button>", { class: "btn btn-default btn-lg btn-block" }).prop("disabled", true).text("Pontuações").click(function() {
                    gens.body.fadeOut(400, function() { gens.pages("points"); });
                }),

                // Créditos do Jogo
                $("<button>", { class: "btn btn-default btn-lg btn-block" }).text("Créditos").click(function() {
                    gens.body.fadeOut(400, function() { gens.pages("credits"); });
                })


            )

        );

        gens.loading(false);

    },




    // Tabela de Pontuações
    points: function() {

        gens.loading(false);

    },




    // Página de Créditos
    credits: function() {

        gens.body.html(

            // O Container dos créditos
            $("<div>", { class: "credits container" }).append(
                $("<h2>").text("Créditos do Trabalho"),
                $("<table>", { class: "table table-bordered" }).append(

                    // Topo da tabela
                    $("<thead>").append(
                        $("<tr>").append(
                            $("<td>").text("Aluno(a)"),
                            $("<td>").text("Função")
                        )
                    ),

                    // Lista do Grupo. Programe aqui a sua participação :D
                    $("<tbody>").append(

                        // Yasmin
                        $("<tr>").append(
                            $("<td>").text("Yasmin Seidel"),
                            $("<td>").text("Ajudou a transformar a ideia do trabalho em projeto e desenvolveu o sistema base")
                        )

                    )

                ),
                $("<button>", { class: "btn btn-primary btn-lg btn-block" }).text("Voltar").click(function() {
                    gens.body.fadeOut(400, function() { gens.pages("mainMenu"); });
                })
            )

        );

        gens.loading(false);

    }





};


// Quando a página terminar de carregar. O aplicativo vai começar a executar os scripts aqui.
const startApp = function() {

    // Abrir o menu principal
    gens.pages("mainMenu");

};