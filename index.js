function cardgenerator(){
    return [
        "/images/card_1.png",
        "/images/card_2.png",
        "/images/card_3.png",
        "/images/card_4.png"
        ];
}

var cardslist = [cardgenerator(), cardgenerator()];

var cards_selected = {};

do{

    var randomnumber1 = Math.floor(Math.random()*cardslist[0].length);
    var randomnumber2 = Math.floor(Math.random()*cardslist[1].length);

    console.log(cardslist[0][randomnumber1], 0);
    console.log(cardslist[1][randomnumber2], 1);

    cardslist[0].splice(randomnumber1, 1);
    cardslist[1].splice(randomnumber2, 1);
    
}while (cardslist[0].length != 0);