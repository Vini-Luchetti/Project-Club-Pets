// --- CONFIGURAÇÃO INICIAL ---
// Define 20 penas apenas na primeira vez que o site abre
if (!localStorage.getItem('clube_corvo_iniciado')) {
    localStorage.setItem('penas', 20);
    localStorage.setItem('clube_corvo_iniciado', true);
}

let penas = parseInt(localStorage.getItem('penas')) || 20;

// --- FUNÇÕES DE INTERFACE ---

function atualizarInterface() {
    // Salva o valor atual
    localStorage.setItem('penas', penas);

    // Atualiza o saldo 💎
    const saldoDisplay = document.getElementById('saldoPenas');
    if (saldoDisplay) {
        saldoDisplay.innerText = `💎 ${penas}`;
    }

    // Atualiza o botão de Login/Nome
    const nomeGuardiao = localStorage.getItem('nomeDoPet');
    const botaoStatus = document.getElementById('botaoNome');
    if (nomeGuardiao && botaoStatus) {
        botaoStatus.innerText = `🦅 ${nomeGuardiao}`;
    }
}

// Abre qualquer modal por ID
function abrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
}

// Fecha todos os modais abertos
function fecharModais() {
    document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
}

// --- LÓGICA DO JOGO ---

function adotarPet(nome, imagem) {
    if (penas >= 1) {
        penas -= 1;
        atualizarInterface();
        
        // Altera o título do modal de sucesso e abre
        const titulo = document.getElementById('tituloCompra');
        if (titulo) titulo.innerText = `Adoção de ${nome}`;
        abrirModal('modalCompra');
    } else {
        // Se acabar o saldo, abre o baú
        abrirModal('modalRecarga');
    }
}

function realizarRecarga() {
    const bau = document.getElementById('bauMagico');
    if (bau) {
        bau.style.transform = "scale(1.3) rotate(5deg)";
        setTimeout(() => bau.style.transform = "scale(1) rotate(0deg)", 200);
    }

    penas += 10;
    atualizarInterface();
    alert("O ritual foi um sucesso! +10 Penas de Cristal.");
    fecharModais();
}

// --- INICIALIZAÇÃO AO CARREGAR ---
document.addEventListener('DOMContentLoaded', () => {
    atualizarInterface();

    // Menu Hambúrguer
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }
});

// Fechar ao clicar fora do modal
window.onclick = (event) => {
    if (event.target.classList.contains('modal')) fecharModais();
};