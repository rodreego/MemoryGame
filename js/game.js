/* 

Todo o script do jogo vai ser escrito aqui para ficar mais organizado do restinho do sistema do aplicativo.
Está função de começar o jogo sempre vai ser chamada no momento exato que for clicado o botão "Jogar"

*/

const memoryGame = {

    app: function(data) {

        // O valor que estava dentro do input precisa ser convertido para número aqui, caso contrário, não vai funcionar
        data.cards = Number(data.cards);

        gens.body.html(

            // O Container dos créditos
            $("<div>", { class: "game container" }).append(

            )

        );

        // Quando a página terminar de aparecer, a gente dar inicio a partida aqui
        gens.loading(false, function() {

            console.log(data.cards);
            console.log(gens.getCards(data.cards));

        });

    }

};