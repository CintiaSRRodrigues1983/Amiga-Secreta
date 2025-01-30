let listaAmigaSecreta = [];
let tentativas = 1;

function adicionarAmiga() {
    let nomeAmigaSecreta = document.getElementById ('amiga').value;

    if (nomeAmigaSecreta === '') {
        alert('Favor Inserir os Nomes.');
        return;
    }
    listaAmigaSecreta.push (nomeAmigaSecreta);
    limparCampo ();
    exibirNomesDaListaNaTela ('listaAmigas', nomeAmigaSecreta);
}

function limparCampo(){
    nomeAmigaSecreta = document.getElementById('amiga');
    nomeAmigaSecreta.value = '';
}

function exibirNomesDaListaNaTela(id,texto){
    let campo = document.getElementById(id);
    campo.innerHTML += `<li>${texto}<li>`; 
}

function exibirAmigaSorteada(id,texto){
    let campo = document.getElementById(id);
    campo.innerHTML += `<li> A sua amiga secreta é a ${texto}!<li>`;
}

function sortearAmiga(){
    if (listaAmigaSecreta.length === 0){
        alert('Lista vazia, adicione pelo menos um nome para sortear!');
        return;
    } if (tentativas == 1) {
    let amigaSorteada = Math.floor(Math.random() * listaAmigaSecreta.length);
    let amigaComSorte = listaAmigaSecreta[amigaSorteada];
    document.getElementById('listaAmigas').innerHTML = '';
    exibirAmigaSorteada('listaAmigas',amigaComSorte);
    tentativas = tentativas +1;
}   else {
    alert ('Você já sorteou sua amiga secreta!');
} 
}
