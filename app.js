function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de > ate){
        alert("Campo 'Do número' deve ser inferior que o campo 'Até o número'.");
        return; //serve para que a função sortear() seja interrompida nesse ponto
    }

    if (quantidade > (ate - de + 1)){
        alert("Campo 'Quantidade' deve ser menor ou igual ao intervalo informado no campo 'Do número' até o campo 'Até o número'. Verifique!");
        return;
    }

    let numeroSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (numeroSorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }

        numeroSorteados.push(numero);
    }
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numeroSorteados}</label>`

    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");

    if (botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");
    } else {
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}