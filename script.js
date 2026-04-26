// =========================================
// 1. SISTEMA DE ECONOMIA (PENAS DE CRISTAL)
// =========================================

// Inicializa a economia do Guardião se for a primeira vez
if (!localStorage.getItem('creditosMagicos')) {
    localStorage.setItem('creditosMagicos', 3); // Começa com 3 créditos
}

function atualizarInterface() {
    // Busca o nome do guardião e os créditos atuais
    let nomeGuardado = localStorage.getItem('nomeDoPet'); // Nome vindo do Quiz
    let creditos = localStorage.getItem('creditosMagicos');
    
    const btnNome = document.getElementById('botaoNome');
    
    if (btnNome) {
        if (nomeGuardado) {
            // Exibe Nome e Créditos no menu
            btnNome.innerHTML = `🦅 ${nomeGuardado} | <span style="color: #00ff88;">✨ ${creditos} Penas</span>`;
        } else {
            btnNome.innerText = "Entrar";
        }
    }
}

function adotarPet(nomePet, imagemCaminho) {
    let creditos = parseInt(localStorage.getItem('creditosMagicos'));

    if (creditos > 0) {
        // Deduz um crédito
        creditos -= 1;
        localStorage.setItem('creditosMagicos', creditos);
        
        // Ritual de Download Automático
        const link = document.createElement('a');
        link.href = imagemCaminho;
        link.download = `Meu_Pet_${nomePet}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert(`✨ Sucesso! O ritual de adoção do ${nomePet} foi concluído.\nA criatura foi enviada para sua pasta de downloads!`);
        
        // Atualiza a barra de menu com o novo saldo
        atualizarInterface();
    } else {
        alert("❌ Suas Penas de Cristal acabaram! O Corvo Mensageiro precisa de mais tempo para encontrar novas penas nas montanhas...");
    }
}

// =========================================
// 2. CONTROLE DE MODAIS (JANELAS)
// =========================================

function abrirModal(id) {
    document.getElementById(id).style.display = 'block';
}

function abrirModalCompra(nomePet) {
    document.getElementById('modalCompra').style.display = 'block';
    document.getElementById('tituloCompra').innerText = 'Adotar o ' + nomePet;
}

function fecharModais() {
    if(document.getElementById('modalLogin')) document.getElementById('modalLogin').style.display = 'none';
    if(document.getElementById('modalCompra')) document.getElementById('modalCompra').style.display = 'none';
}

function confirmarCompra() {
    alert("✨ Sucesso! A confirmação foi enviada. Seu pet sombrio já está arrumando as malas para ir morar com você! ✨");
    fecharModais();
}

// =========================================
// 3. INICIALIZAÇÃO
// =========================================

// Carrega as informações assim que a página abre
window.onload = function() {
    atualizarInterface();
};