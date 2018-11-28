# JS Libs

Por favor, apenas edite os arquivos desta pasta se você souber o que realmente está fazendo. As funcionalidades aqui são impactadas no aplicativo inteiro.

## Códigos disponíveis

### gens.body
Representa de forma totalmente segura o valor $("#game") para ser manipulado pelo jQuery
```js
gens.body.addClass("loaded");
```

### gens.getCards(number)
Aqui você pode obter a lista cartas do jogo
```js
console.log(gens.getCards());
```

Se você colocar um número dentro da função, você receberá um número limitado de cartas
```js
console.log(gens.getCards(5));
```

### gens.loading(boolean, callback)
Agora podemos mostrar o conteúdo que está dentro da div #game
    
Deste jeito vamos ter uma transição mais elegante e natural para o jogo da página de loading para o game em si
    
Valor false vai exibir o jogo, valor true vai exibir a tela de loading

```js
gens.loading(false, function() {

    // E podemos de forma opcional usar esse callback para fazer alguma coisinha quando a animação de transição de tela terminar
    console.log("Load 100% completo");

});
```

### gens.loadImages(array, callback, boolean)
Dentro do array você vai colocar a lista de imagens dentro do diretório img do aplicativo para serem carregados na cache antes do callback ser chamado

Se o arquivo não for uma imagem, um erro será emitido

Se acontecer algum erro no script, o valor err vai ser retornado

O boolean no valor true serve para ignorar o sistema de inserir o diretório de imagens na string de forma automática. Ele não precisa está ali, você pode remover ele se quiser
```js
gens.loadImages(['favicon.png'], function(err){
    if(err){
        console.error(err);
    } else{
    console.log("Imagens carregadas");
    }
}, false)
```

### gens.clone(object)

Aqui você pode clocar qualquer object para ser reutilizado
```js

var nya = {bo: "yay"};

var nyaClone = gens.clone(nya);

nya.bo = "yay 2";

console.log(nya, nyaClone);

```

###  startApp

Definar alguma callback aqui dentro. Isso aqui é onde o aplicativo vai começar quando ele estiver pronto para ser executado
```js
const startApp = function(){

    console.log("O aplicativo foi iniciado com sucesso.");

};
```