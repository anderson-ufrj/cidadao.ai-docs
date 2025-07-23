// Cidadão.AI - JavaScript Principal

// ===== TRADUÇÕES ===== 
const translations = {
    'pt-BR': {
        'site.title': 'Cidadão.AI — Hub de Documentação',
        'nav.theme.light': '☀️ Claro',
        'nav.theme.dark': '🌙 Escuro',
        'nav.lang.pt': '🇧🇷 PT',
        'nav.lang.en': '🇺🇸 EN',
        'nav.manifesto': '📜 Manifesto',
        
        'hero.badge': '🇧🇷 Transparência Pública com IA',
        'hero.title': 'Cidadão.AI',
        'hero.subtitle': 'Hub Oficial de Documentação',
        'hero.description': 'O Cidadão.AI reúne múltiplas inteligências artificiais brasileiras trabalhando em rede para democratizar o acesso aos dados públicos, fortalecer a transparência e empoderar cada cidadão com informação clara, acessível e auditável.',
        'hero.mission': 'Este é o ponto de encontro entre tecnologia, cidadania e responsabilidade pública.',
        'hero.btn.manifesto': '📜 Manifesto',
        'hero.btn.system': '🤖 Entenda o Sistema',
        
        'carousel.title': 'Conheça Nossas IAs Brasileiras',
        'carousel.subtitle': 'Cada agente é uma inteligência artificial especializada, trabalhando 24/7 pela transparência pública',
        'carousel.button': 'Entenda nossos agentes de IA',
        
        'section.about.title': 'Sobre o Projeto',
        'section.about.description': 'O Cidadão.AI é um sistema multi-agente que utiliza inteligência artificial para democratizar o acesso aos dados públicos brasileiros.',
        
        'section.repositories.title': 'Repositórios',
        'section.links.title': 'Links do Projeto',
        'section.api.title': 'Documentação da API',
        
        'modal.about.title': 'Sobre o Cidadão.AI',
        'modal.about.content': 'O Cidadão.AI é um projeto de pesquisa, software livre e engajamento cívico, idealizado e desenvolvido por Anderson Henrique da Silva como Trabalho de Conclusão de Curso (TCC), sob orientação da Profa. Dra. Aracele Garcia de Oliveira Fassbinder.',
        
        'modal.manifesto.title': 'Manifesto Cidadão.AI',
        'modal.manifesto.content': 'Por uma Inteligência Artificial que Serve ao Povo e Ilumina o Estado. O Cidadão.AI nasce da vontade de tornar os dados públicos verdadeiramente públicos.',
        
        'modal.system.title': 'Sistema Multi-Agente',
        'modal.system.content': 'O Cidadão.AI opera através de uma arquitetura distribuída com múltiplos agentes especializados, cada um responsável por funções específicas no processamento e análise de dados públicos brasileiros.',
        
        'agent.abaporu.name': 'Abaporu',
        'agent.abaporu.role': 'Núcleo Central da IA',
        'agent.abaporu.desc': 'Coordena operações entre agentes e processa linguagem natural.',
        
        'agent.anita.name': 'Anita Garibaldi',
        'agent.anita.role': 'Roteadora Semântica', 
        'agent.anita.desc': 'Gerencia roteamento inteligente de consultas.',
        
        'agent.zumbi.name': 'Zumbi',
        'agent.zumbi.role': 'Investigador de Padrões',
        'agent.zumbi.desc': 'Especialista em detecção de padrões ocultos.',
        
        'agent.tiradentes.name': 'Tiradentes',
        'agent.tiradentes.role': 'Avaliador de Riscos',
        'agent.tiradentes.desc': 'Avalia riscos operacionais e violações de compliance.',
        
        'agent.obaluaie.name': 'Obaluaiê',
        'agent.obaluaie.role': 'Detector de Corrupção',
        'agent.obaluaie.desc': 'Detecta anomalias sistêmicas indicativas de corrupção.',
        
        'agent.niemeyer.name': 'Niemeyer',
        'agent.niemeyer.role': 'Visualização Gráfica',
        'agent.niemeyer.desc': 'Cria visualizações interativas e relatórios gráficos.',
        
        'agent.nana.name': 'Nanã',
        'agent.nana.role': 'Agente Temporal',
        'agent.nana.desc': 'Processa séries temporais e identifica padrões históricos.',
        
        'agent.lampiao.name': 'Lampião',
        'agent.lampiao.role': 'Executor Técnico',
        'agent.lampiao.desc': 'Executa processos ETL e automação de coleta de dados.',
        
        'agent.ceuci.name': 'Ceuci',
        'agent.ceuci.role': 'Agente Preditivo',
        'agent.ceuci.desc': 'Realiza análise preditiva e modelagem de tendências.',
        
        'agent.dandara.name': 'Dandara',
        'agent.dandara.role': 'Justiça Social',
        'agent.dandara.desc': 'Monitora políticas de inclusão e equidade social.',
        
        'agent.machado.name': 'Machado de Assis',
        'agent.machado.role': 'Análise Textual',
        'agent.machado.desc': 'Processa documentos governamentais com análise semântica.',
        
        'agent.bonifacio.name': 'José Bonifácio',
        'agent.bonifacio.role': 'Políticas Públicas',
        'agent.bonifacio.desc': 'Analisa eficácia de políticas públicas e reformas.',
        
        'agent.deodoro.name': 'Deodoro da Fonseca',
        'agent.deodoro.role': 'Agente Base',
        'agent.deodoro.desc': 'Define contratos e interfaces base para todos os agentes do sistema.',
        
        'agent.drummond.name': 'Drummond',
        'agent.drummond.role': 'Agente de Comunicação',
        'agent.drummond.desc': 'Gera comunicações automáticas e alertas multi-canal para cidadãos.',
        
        'agent.quiteria.name': 'Maria Quitéria',
        'agent.quiteria.role': 'Agente de Segurança',
        'agent.quiteria.desc': 'Realiza auditoria de segurança e proteção da integridade do sistema.',
        
        'agents.power.title': '🚀 Arquitetura de Alta Performance',
        'agents.power.description': 'Cada agente opera com inteligência artificial avançada, processamento paralelo e capacidade de análise em tempo real. Juntos, formam um ecossistema robusto capaz de processar terabytes de dados públicos, detectar padrões complexos e gerar insights actionáveis para fortalecer a transparência governamental e empoderar a cidadania brasileira.',
    },
    
    'en-US': {
        'site.title': 'Cidadão.AI — Documentation Hub',
        'nav.theme.light': '☀️ Light',
        'nav.theme.dark': '🌙 Dark',
        'nav.lang.pt': '🇧🇷 PT',
        'nav.lang.en': '🇺🇸 EN',
        'nav.manifesto': '📜 Manifesto',
        
        'hero.badge': '🇧🇷 Public Transparency with AI',
        'hero.title': 'Cidadão.AI',
        'hero.subtitle': 'Official Documentation Hub',
        'hero.description': 'Cidadão.AI brings together multiple Brazilian artificial intelligences working in a network to democratize access to public data, strengthen transparency and empower every citizen with clear, accessible and auditable information.',
        'hero.mission': 'This is the meeting point between technology, citizenship and public responsibility.',
        'hero.btn.manifesto': '📜 Manifesto',
        'hero.btn.system': '🤖 Understand the System',
        
        'carousel.title': 'Meet Our Brazilian AIs',
        'carousel.subtitle': 'Each agent is a specialized artificial intelligence, working 24/7 for public transparency',
        'carousel.button': 'Understand our AI agents',
        
        'section.about.title': 'About the Project',
        'section.about.description': 'Cidadão.AI is a multi-agent system that uses artificial intelligence to democratize access to Brazilian public data.',
        
        'section.repositories.title': 'Repositories',
        'section.links.title': 'Project Links',
        'section.api.title': 'API Documentation',
        
        'modal.about.title': 'About Cidadão.AI',
        'modal.about.content': 'Cidadão.AI is a research project, free software and civic engagement, conceived and developed by Anderson Henrique da Silva as an undergraduate thesis, supervised by Prof. Dr. Aracele Garcia de Oliveira Fassbinder.',
        
        'modal.manifesto.title': 'Cidadão.AI Manifesto',
        'modal.manifesto.content': 'For an Artificial Intelligence that Serves the People and Illuminates the State. Cidadão.AI is born from the desire to make public data truly public.',
        
        'modal.system.title': 'Multi-Agent System',
        'modal.system.content': 'Cidadão.AI operates through a distributed architecture with multiple specialized agents, each responsible for specific functions in processing and analyzing Brazilian public data.',
        
        'agent.abaporu.name': 'Abaporu',
        'agent.abaporu.role': 'AI Central Core',
        'agent.abaporu.desc': 'Coordinates operations between agents and processes natural language.',
        
        'agent.anita.name': 'Anita Garibaldi',
        'agent.anita.role': 'Semantic Router',
        'agent.anita.desc': 'Manages intelligent query routing.',
        
        'agent.zumbi.name': 'Zumbi',
        'agent.zumbi.role': 'Pattern Investigator',
        'agent.zumbi.desc': 'Specialist in detecting hidden patterns.',
        
        'agent.tiradentes.name': 'Tiradentes',
        'agent.tiradentes.role': 'Risk Evaluator',
        'agent.tiradentes.desc': 'Evaluates operational risks and compliance violations.',
        
        'agent.obaluaie.name': 'Obaluaiê',
        'agent.obaluaie.role': 'Corruption Detector',
        'agent.obaluaie.desc': 'Detects systemic anomalies indicative of corruption.',
        
        'agent.niemeyer.name': 'Niemeyer',
        'agent.niemeyer.role': 'Graphic Visualization',
        'agent.niemeyer.desc': 'Creates interactive visualizations and graphic reports.',
        
        'agent.nana.name': 'Nanã',
        'agent.nana.role': 'Temporal Agent',
        'agent.nana.desc': 'Processes time series and identifies historical patterns.',
        
        'agent.lampiao.name': 'Lampião',
        'agent.lampiao.role': 'Technical Executor',
        'agent.lampiao.desc': 'Executes ETL processes and data collection automation.',
        
        'agent.ceuci.name': 'Ceuci',
        'agent.ceuci.role': 'Predictive Agent',
        'agent.ceuci.desc': 'Performs predictive analysis and trend modeling.',
        
        'agent.dandara.name': 'Dandara',
        'agent.dandara.role': 'Social Justice',
        'agent.dandara.desc': 'Monitors inclusion policies and social equity.',
        
        'agent.machado.name': 'Machado de Assis',
        'agent.machado.role': 'Textual Analysis',
        'agent.machado.desc': 'Processes government documents with semantic analysis.',
        
        'agent.bonifacio.name': 'José Bonifácio',
        'agent.bonifacio.role': 'Public Policy',
        'agent.bonifacio.desc': 'Analyzes effectiveness of public policies and reforms.',
        
        'agent.deodoro.name': 'Deodoro da Fonseca',
        'agent.deodoro.role': 'Base Agent',
        'agent.deodoro.desc': 'Defines contracts and base interfaces for all system agents.',
        
        'agent.drummond.name': 'Drummond',
        'agent.drummond.role': 'Communication Agent',
        'agent.drummond.desc': 'Generates automatic communications and multi-channel alerts for citizens.',
        
        'agent.quiteria.name': 'Maria Quitéria',
        'agent.quiteria.role': 'Security Agent',
        'agent.quiteria.desc': 'Performs security auditing and system integrity protection.',
        
        'agents.power.title': '🚀 High-Performance Architecture',
        'agents.power.description': 'Each agent operates with advanced artificial intelligence, parallel processing and real-time analysis capabilities. Together, they form a robust ecosystem capable of processing terabytes of public data, detecting complex patterns and generating actionable insights to strengthen government transparency and empower Brazilian citizenship.',
    }
};

// ===== ESTADO GLOBAL =====
let currentLanguage = 'pt-BR';
let currentTheme = 'light';

// Carrossel movido para carousel.js

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Cidadão.AI - Inicializando...');
    
    // Detectar preferências do usuário
    detectUserPreferences();
    
    // Aplicar tema e idioma
    applyTheme(currentTheme);
    updateLanguage(currentLanguage);
    
    // Inicializar event listeners
    initializeEventListeners();
    
    // Garantir que modais estejam ocultos
    hideAllModals();
    
    console.log('✅ Cidadão.AI - Inicializado com sucesso!');
});

// ===== DETECÇÃO DE PREFERÊNCIAS =====
function detectUserPreferences() {
    // Detectar tema preferido
    const savedTheme = localStorage.getItem('cidadao-ai-theme');
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        currentTheme = 'dark';
    }
    
    // Detectar idioma preferido
    const savedLanguage = localStorage.getItem('cidadao-ai-language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        currentLanguage = browserLang.startsWith('pt') ? 'pt-BR' : 'en-US';
    }
}

// ===== GERENCIAMENTO DE TEMA =====
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(currentTheme);
    localStorage.setItem('cidadao-ai-theme', currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    // Atualizar botões de tema
    const lightBtns = document.querySelectorAll('[data-theme-btn="light"]');
    const darkBtns = document.querySelectorAll('[data-theme-btn="dark"]');
    
    lightBtns.forEach(btn => {
        btn.classList.toggle('active', theme === 'light');
    });
    
    darkBtns.forEach(btn => {
        btn.classList.toggle('active', theme === 'dark');
    });
    
    console.log(`🎨 Tema aplicado: ${theme}`);
}

// ===== GERENCIAMENTO DE IDIOMA =====
function toggleLanguage() {
    currentLanguage = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    updateLanguage(currentLanguage);
    localStorage.setItem('cidadao-ai-language', currentLanguage);
}

function updateLanguage(lang) {
    currentLanguage = lang;
    
    // Atualizar título da página
    document.title = translations[lang]['site.title'];
    
    // Atualizar todos os elementos com data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Atualizar botões de idioma
    const ptBtns = document.querySelectorAll('[data-lang-btn="pt-BR"]');
    const enBtns = document.querySelectorAll('[data-lang-btn="en-US"]');
    
    ptBtns.forEach(btn => {
        btn.classList.toggle('active', lang === 'pt-BR');
    });
    
    enBtns.forEach(btn => {
        btn.classList.toggle('active', lang === 'en-US');
    });
    
    // Atualizar conteúdo dos agentes
    updateAgentsContent();
    
    console.log(`🌐 Idioma atualizado: ${lang}`);
}

// ===== GERENCIAMENTO DE MODAIS =====
function openModal(modalId) {
    console.log(`📖 Abrindo modal: ${modalId}`);
    
    // Fechar todos os modais primeiro
    hideAllModals();
    
    // Abrir o modal solicitado
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
        
        // Adicionar listener para fechar com ESC
        document.addEventListener('keydown', handleModalKeydown);
        
        // Prevenir scroll do body
        document.body.style.overflow = 'hidden';
        
        console.log(`✅ Modal aberto: ${modalId}`);
    } else {
        console.error(`❌ Modal não encontrado: ${modalId}`);
    }
}

function closeModal(modalId) {
    console.log(`❌ Fechando modal: ${modalId}`);
    
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
        
        // Remover listener do ESC
        document.removeEventListener('keydown', handleModalKeydown);
        
        // Restaurar scroll do body
        document.body.style.overflow = '';
        
        console.log(`✅ Modal fechado: ${modalId}`);
    }
}

function hideAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
        modal.style.display = 'none';
    });
    
    // Restaurar scroll do body
    document.body.style.overflow = '';
}

function handleModalKeydown(event) {
    if (event.key === 'Escape') {
        hideAllModals();
    }
}

// ===== ATUALIZAÇÃO DOS AGENTES =====
function updateAgentsContent() {
    const agents = [
        'abaporu', 'anita', 'zumbi', 'tiradentes', 'obaluaie', 'niemeyer',
        'nana', 'lampiao', 'ceuci', 'dandara', 'machado', 'bonifacio',
        'deodoro', 'drummond', 'quiteria'
    ];
    
    agents.forEach(agentId => {
        // Atualizar nome
        const nameElement = document.querySelector(`[data-agent="${agentId}"] .agent-name`);
        if (nameElement) {
            nameElement.textContent = translations[currentLanguage][`agent.${agentId}.name`];
        }
        
        // Atualizar role
        const roleElement = document.querySelector(`[data-agent="${agentId}"] .agent-role`);
        if (roleElement) {
            roleElement.textContent = translations[currentLanguage][`agent.${agentId}.role`];
        }
        
        // Atualizar descrição
        const descElement = document.querySelector(`[data-agent="${agentId}"] .agent-description`);
        if (descElement) {
            descElement.textContent = translations[currentLanguage][`agent.${agentId}.desc`];
        }
    });
}

// ===== EVENT LISTENERS =====
function initializeEventListeners() {
    // Botões de tema
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme-btn');
            if (theme !== currentTheme) {
                toggleTheme();
            }
        });
    });
    
    // Botões de idioma
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-btn');
            if (lang !== currentLanguage) {
                updateLanguage(lang);
                localStorage.setItem('cidadao-ai-language', lang);
            }
        });
    });
    
    // Botões de modal
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal-open');
            openModal(modalId);
        });
    });
    
    // Botões de fechar modal
    document.querySelectorAll('[data-modal-close]').forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal-close');
            closeModal(modalId);
        });
    });
    
    // Fechar modal clicando fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.classList.remove('active');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
    
    // Botão flutuante - recriar para garantir funcionamento
    recreateFloatingButton();
    
    // EXTERMINADOR NUCLEAR DE ELEMENTOS VERDES
    setTimeout(() => {
        cleanupGreenElements();
        destroyAllGreenElements();
    }, 1000);
    
    // Executar limpeza a cada 3 segundos (modo agressivo)
    setInterval(() => {
        destroyAllGreenElements();
    }, 3000);
    
    console.log('🎯 Event listeners inicializados');
}

// ===== LIMPEZA DE ELEMENTOS VERDES FANTASMAS =====
function cleanupGreenElements() {
    // Remover qualquer elemento com background verde suspeito
    const suspiciousElements = document.querySelectorAll('*');
    suspiciousElements.forEach(el => {
        const styles = getComputedStyle(el);
        if (styles.backgroundColor.includes('rgb(16, 185, 129)') || 
            styles.backgroundColor.includes('#10b981') ||
            styles.background.includes('10b981') ||
            styles.background.includes('059669')) {
            
            // Se não for um elemento esperado, removê-lo
            if (!el.classList.contains('floating-button-dynamic') && 
                !el.classList.contains('agent-card') &&
                !el.classList.contains('carousel-agent') &&
                !el.classList.contains('dynamic-tooltip') &&
                !el.id.includes('carousel') &&
                el.tagName !== 'BUTTON') {
                console.log('🚨 Removendo elemento verde suspeito:', el);
                el.remove();
            }
        }
    });
}

// ===== BOTÃO FLUTUANTE MODULAR =====
// Função que usa o módulo FloatingButton
function recreateFloatingButton() {
    // Usar a função global do módulo floating-button.js
    if (typeof window.FloatingButton !== 'undefined') {
        console.log('✅ Criando botão com módulo FloatingButton');
        
        // Remover botões antigos
        const oldButtons = document.querySelectorAll('.floating-button, .floating-button-dynamic, .floating-button-module');
        oldButtons.forEach(btn => btn.remove());
        
        // Criar novo botão usando o módulo
        const button = new FloatingButton({
            icon: 'ℹ️',
            onClick: () => {
                console.log('🚀 Botão flutuante clicado!');
                openModal('aboutModal');
            },
            ariaLabel: 'Abrir informações sobre o projeto'
        });
        
        button.render();
        console.log('✅ Botão flutuante criado via módulo');
        
    } else {
        console.error('❌ FloatingButton module não carregado!');
    }
}

// ===== UTILIDADES =====
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== EXPORTAR FUNÇÕES GLOBAIS =====
window.CidadaoAI = {
    openModal,
    closeModal,
    toggleTheme,
    toggleLanguage,
    scrollToSection,
    cleanupGreenElements
};

console.log('📦 Script Cidadão.AI carregado!');