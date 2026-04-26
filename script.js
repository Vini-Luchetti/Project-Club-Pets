// script.js

// Inicializa a economia se o Guardião for novo
if (!localStorage.getItem('creditosMagicos')) {
    localStorage.setItem('creditosMagicos', '3');
}

function atualizarInterface() {
    let nomeGuardado = localStorage.getItem('nomeDoPet');
    let creditos = localStorage.getItem('creditosMagicos') || '0';
    
    const btnNome = document.getElementById('botaoNome');
    if (btnNome) {
        btnNome.innerHTML = `🦅 ${nomeGuardado || "Guardião"} | <span style="color: #00ff88;">✨ ${creditos} Penas</span>`;
    }
}

function adotarPet(nomePet, imagemCaminho) {
    let creditosRaw = localStorage.getItem('creditosMagicos');
    let creditos = parseInt(creditosRaw);

    console.log(`Iniciando adoção de: ${nomePet}. Créditos atuais: ${creditos}`);

    if (creditos > 0) {
        // Deduz o crédito
        creditos -= 1;
        localStorage.setItem('creditosMagicos', creditos.toString());
        
        // Ritual de Download
        const link = document.createElement('a');
        link.href = imagemCaminho;
        link.download = `Pet_Sombrio_${nomePet}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        alert(`✨ O ritual funcionou! O ${nomePet} foi enviado para seus downloads.`);
        atualizarInterface();
    } else {
        alert("❌ Suas Penas de Cristal acabaram! O Corvo precisa de tempo para buscar mais...");
    }
}

// Garante que a interface atualiza ao carregar
window.addEventListener('load', atualizarInterface);