//jeito mais dificil

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = "Escolha um numero entre 1 e 10";

let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatori ();
let tentativas = 1;

//funçao para exibir os textos na tela

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responseveVoice.speak(texto, "Brazilian Portuguese Famele", 
    {rate:1.2});
}

//puxou a funçaõ aqui

function exibirMensagemDeReiniciar() {
    exibirTextoNaTela ("h1", "jogo do numero secreto");
    exibirTextoNaTela ("p", "Escolha um numero entre 1 e 10");
}

exibirMensagemDeReiniciar()

function verificarChute() {
    let chute = document.querySelector ("input").value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela("h1", "ACERTOU");
        exibirTextoNaTela("h1", "ACERTOU");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}.`);
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela("p", "O numero secreto é menor");
        }else {
            exibirTextoNaTela("p", "O numero secreto é maior");
        }
        tentativas = tentativas + 1;
        limparNumero()
    }
}

function gerarNumeroAleatori() {
   let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
   let QuantidadeNumerosDaLista = listaDeNumerosSorteados.length;

   if(QuantidadeNumerosDaLista == numeroMaximo) {
    listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
   return gerarNumeroAleatori();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparNumero() {
    chute = document.querySelector("input");
    chute.value = " ";
}

function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatori();
    tentativas = 1;
    limparNumero();
    exibirMensagemDeReiniciar()
    document.getElementById ("reiniciar").setAttribute("disabled",true)
}