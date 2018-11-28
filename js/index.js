// Configurações da engine do jogo

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
        'logo.png',
        'card.jpeg'
    ],


    // Lista de Pages do jogo dentro de suas IDs para serem executadas.
    pages: {



        // O sistema do jogo está dentro do arquivo game.js
        game: memoryGame.app,



        // Menu Principal
        mainMenu: function() {

            // Configurador de Cartas para jogar. Este painel reconhece sozinho  quantas cartas estão instaladas no jogo
            var Cardsmount = $("<input>", { type: "number", min: 1, max: gens.game.cards.length, class: "form-control" }).val(gens.game.cards.length).change(function() {

                if (Number($(this).val()) > Number($(this).attr("max"))) {

                    $(this).val($(this).attr("max"));

                } else if (Number($(this).val()) < Number($(this).attr("min"))) {

                    $(this).val($(this).attr("min"));

                }

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
                        Cardsmount
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





    }
};


// Quando a página terminar de carregar. O aplicativo vai começar a executar os scripts aqui.
const startApp = function() {

    // Abrir o menu principal
    gens.pages("mainMenu");

};