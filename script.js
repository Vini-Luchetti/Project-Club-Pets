// script.js

function abrirModal(id) {
    document.getElementById(id).style.display = 'block';
}

function abrirModalCompra(nomePet) {
    document.getElementById('modalCompra').style.display = 'block';
    document.getElementById('tituloCompra').innerText = 'Adotar o ' + nomePet;
}

function fecharModais() {
    document.getElementById('modalLogin').style.display = 'none';
    document.getElementById('modalCompra').style.display = 'none';
}

function confirmarCompra() {
    // Alerta super amigável para a brincadeira
    alert("✨ Sucesso! A confirmação foi enviada. Seu pet sombrio já está arrumando as malas para ir morar com você! ✨");
    fecharModais();
}

// Assim que a página carregar, ela busca o nome guardado
window.onload = function() {
    let nomeGuardado = localStorage.getItem('nomeDoPet');
    if (nomeGuardado) {
        // Troca o texto "Entrar" pelo nome da criança
        document.getElementById('botaoNome').innerText = "Guardião: " + nomeGuardado;
    }
};