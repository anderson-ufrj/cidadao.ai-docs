/* ===================================
   CIDADÃO.AI - CARROSSEL DE AGENTES JS
   =================================== */

// Lista de agentes para o carrossel
const agentsList = [
    { name: 'Abaporu', role: 'Nosso agente central de IA', image: 'abaporu.png' },
    { name: 'Anita Garibaldi', role: 'Nossa agente de roteamento', image: 'anita.png' },
    { name: 'Zumbi', role: 'Nosso agente investigador', image: 'zumbi.jpeg' },
    { name: 'Tiradentes', role: 'Nosso agente de riscos', image: 'tiradentes.png' },
    { name: 'Obaluaiê', role: 'Nosso agente detector', image: 'obaluaie.png' },
    { name: 'Niemeyer', role: 'Nosso agente de visualização', image: 'niemeyer.png' },
    { name: 'Nanã', role: 'Nossa agente temporal', image: 'nana.png' },
    { name: 'Lampião', role: 'Nosso agente executor', image: 'lampiao.png' },
    { name: 'Ceuci', role: 'Nossa agente preditiva', image: 'ceuci.png' },
    { name: 'Dandara', role: 'Nossa agente de justiça', image: 'dandara.png' },
    { name: 'Machado de Assis', role: 'Nosso agente textual', image: 'machado.png' },
    { name: 'José Bonifácio', role: 'Nosso agente de políticas', image: 'bonifacio.png' },
    { name: 'Deodoro da Fonseca', role: 'Nosso agente base', image: 'deodoro-fonseca.png' },
    { name: 'Drummond', role: 'Nosso agente de comunicação', image: 'carlos-drummond.png' },
    { name: 'Maria Quitéria', role: 'Nossa agente de segurança', image: 'maria-quiteria.png' }
];

// Função para gerar o carrossel
function generateCarousel() {
    console.log('🎠 Gerando carrossel de agentes...');
    
    const track = document.getElementById('carousel-track');
    if (!track) {
        console.error('❌ Elemento carousel-track não encontrado!');
        return;
    }
    
    // Gerar 6 sequências (90 agentes total) para garantir loop infinito
    let html = '';
    for (let sequence = 0; sequence < 6; sequence++) {
        agentsList.forEach(agent => {
            html += `
                <div class="carousel-agent" data-modal-open="systemModal" data-name="${agent.name}" data-role="${agent.role}">
                    <img src="assets/agents/${agent.image}" alt="${agent.name}" class="carousel-avatar">
                </div>
            `;
        });
    }
    
    track.innerHTML = html;
    console.log('✅ Carrossel gerado com', track.children.length, 'agentes');
    
    // Configurar tooltips após gerar o HTML
    setupCarouselTooltips();
}

// Função para configurar tooltips
function setupCarouselTooltips() {
    console.log('🎯 Configurando tooltips do carrossel...');
    
    const tooltip = document.getElementById('global-tooltip');
    if (!tooltip) {
        console.error('❌ Elemento global-tooltip não encontrado!');
        return;
    }
    
    console.log('🎯 Tooltip encontrado:', tooltip);
    console.log('📍 Tooltip position:', tooltip.style.position);
    console.log('📦 Tooltip parent:', tooltip.parentElement);
    console.log('🔍 Tooltip computed style:', getComputedStyle(tooltip).display);
    
    const agents = document.querySelectorAll('.carousel-agent');
    console.log('📊 Encontrados', agents.length, 'agentes para tooltip');
    
    agents.forEach(agent => {
        agent.addEventListener('mouseenter', (e) => {
            const name = agent.getAttribute('data-name');
            const role = agent.getAttribute('data-role');
            
            console.log('🖱️ Hover:', name, '|', role);
            
            if (name && role) {
                // Usar o tooltip CSS do carousel.css (não o global problemático)
                const tooltip = document.getElementById('global-tooltip');
                if (tooltip) {
                    tooltip.innerHTML = `${name}<br>${role}`;
                    tooltip.className = 'carousel-tooltip'; // Classe específica
                    tooltip.style.display = 'block';
                    
                    const rect = agent.getBoundingClientRect();
                    tooltip.style.left = `${rect.left + (rect.width / 2)}px`;
                    tooltip.style.top = `${rect.bottom + 10}px`;
                }
            }
        });
        
        agent.addEventListener('mouseleave', () => {
            const tooltip = document.getElementById('global-tooltip');
            if (tooltip) {
                tooltip.style.display = 'none';
                tooltip.className = '';
            }
        });
    });
    
    console.log('✅ Tooltips configurados');
}

// Inicializar carrossel quando o DOM carregar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousel);
} else {
    initCarousel();
}

function initCarousel() {
    console.log('🚀 Inicializando carrossel...');
    generateCarousel();
    
    // Re-adicionar event listeners para o botão do carrossel
    const carouselBtn = document.querySelector('.carousel-floating-btn');
    if (carouselBtn && !carouselBtn.hasAttribute('data-carousel-initialized')) {
        carouselBtn.addEventListener('click', () => {
            const modalId = carouselBtn.getAttribute('data-modal-open');
            if (modalId && window.CidadaoAI && window.CidadaoAI.openModal) {
                window.CidadaoAI.openModal(modalId);
            }
        });
        carouselBtn.setAttribute('data-carousel-initialized', 'true');
    }
}