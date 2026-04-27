// script.js

// 1. Inicializa o Tesouro do Guardião (Valor alto para as crianças)
if (!localStorage.getItem('creditosMagicos')) {
    localStorage.setItem('creditosMagicos', 1000); // Começa com 1000 Penas!
}

// 2. Função para atualizar o Nome e os Créditos no Menu
function atualizarInterface() {
    const nome = localStorage.getItem('nomeDoPet') || "Guardião";
    const creditos = localStorage.getItem('creditosMagicos');
    
    // Procura o elemento que hoje diz "Entrar" ou o nome
    const displayStatus = document.getElementById('botaoNome');
    
    if (displayStatus) {
        // Estilo: 🦅 Nome | ✨ 100 Penas
        displayStatus.innerHTML = `🦅 ${nome} | <span style="color: #00ff88;">✨ ${creditos} Penas</span>`;
    }
}

// 3. Função de Adoção com Consumo de Crédito e Download
function adotarPet(nomePet, imagemCaminho) {
    let creditos = parseInt(localStorage.getItem('creditosMagicos'));

    if (creditos > 0) {
        // Gasta 1 Pena
        creditos -= 1;
        localStorage.setItem('creditosMagicos', creditos);
        
        // Faz o download da imagem
        const link = document.createElement('a');
        link.href = imagemCaminho;
        link.download = `Pet_${nomePet}_ClubeDoCorvo.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert(`✨ Ritual concluído! O ${nomePet} foi enviado para seus arquivos.\nVocê ainda tem ${creditos} Penas de Cristal.`);
        atualizarInterface();
    } else {
        alert("❌ Suas Penas acabaram! O Corvo precisa de tempo para buscar mais no vale das sombras.");
    }
}

// Inicializa tudo quando a página abre
window.addEventListener('load', atualizarInterface);