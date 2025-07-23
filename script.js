// Cidadão.AI - JavaScript Principal

// ===== TRADUÇÕES ===== 
const translations = {
    'pt-BR': {
        'site.title': 'Cidadão.AI — Hub de Documentação',
        'nav.theme.light': '☀️ Claro',
        'nav.theme.dark': '🌙 Escuro',
        'nav.lang.pt': '🇧🇷 PT',
        'nav.lang.en': '🇺🇸 EN',
        
        'hero.badge': '🇧🇷 Transparência Pública com IA',
        'hero.title': 'Cidadão.AI',
        'hero.subtitle': 'Hub Oficial de Documentação',
        'hero.description': 'Democratizando o acesso aos dados públicos brasileiros através da inteligência artificial, fortalecendo a transparência e empoderando cada cidadão.',
        'hero.btn.manifesto': '📜 Manifesto',
        'hero.btn.system': '🤖 Entenda o Sistema',
        
        'section.about.title': 'Sobre o Projeto',
        'section.about.description': 'O Cidadão.AI é um sistema multi-agente que utiliza inteligência artificial para democratizar o acesso aos dados públicos brasileiros.',
        
        'section.features.title': 'Funcionalidades',
        'feature.analysis.title': 'Análise Inteligente',
        'feature.analysis.desc': 'Detecta anomalias em contratos e despesas públicas usando IA avançada.',
        'feature.reports.title': 'Relatórios Visuais',
        'feature.reports.desc': 'Gráficos e dashboards interativos para visualizar dados públicos.',
        'feature.transparency.title': 'Transparência Total',
        'feature.transparency.desc': 'Acesso simplificado aos dados governamentais brasileiros.',
        
        'modal.about.title': 'Sobre o Cidadão.AI',
        'modal.about.content': 'O Cidadão.AI é um projeto de pesquisa, software livre e engajamento cívico, idealizado e desenvolvido por Anderson Henrique da Silva como Trabalho de Conclusão de Curso (TCC), sob orientação da Profa. Dra. Aracele Garcia de Oliveira Fassbinder.',
        
        'modal.manifesto.title': 'Manifesto Cidadão.AI',
        'modal.manifesto.content': 'Por uma Inteligência Artificial que Serve ao Povo e Ilumina o Estado. O Cidadão.AI nasce da vontade de tornar os dados públicos verdadeiramente públicos.',
        
        'modal.system.title': 'Sistema Multi-Agente',
        'modal.system.content': 'Conheça nossos 12 agentes especializados, cada um inspirado em figuras históricas e culturais brasileiras.',
        
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
    },
    
    'en-US': {
        'site.title': 'Cidadão.AI — Documentation Hub',
        'nav.theme.light': '☀️ Light',
        'nav.theme.dark': '🌙 Dark',
        'nav.lang.pt': '🇧🇷 PT',
        'nav.lang.en': '🇺🇸 EN',
        
        'hero.badge': '🇧🇷 Public Transparency with AI',
        'hero.title': 'Cidadão.AI',
        'hero.subtitle': 'Official Documentation Hub',
        'hero.description': 'Democratizing access to Brazilian public data through artificial intelligence, strengthening transparency and empowering every citizen.',
        'hero.btn.manifesto': '📜 Manifesto',
        'hero.btn.system': '🤖 Understand the System',
        
        'section.about.title': 'About the Project',
        'section.about.description': 'Cidadão.AI is a multi-agent system that uses artificial intelligence to democratize access to Brazilian public data.',
        
        'section.features.title': 'Features',
        'feature.analysis.title': 'Smart Analysis',
        'feature.analysis.desc': 'Detects anomalies in contracts and public spending using advanced AI.',
        'feature.reports.title': 'Visual Reports',
        'feature.reports.desc': 'Interactive charts and dashboards to visualize public data.',
        'feature.transparency.title': 'Total Transparency',
        'feature.transparency.desc': 'Simplified access to Brazilian government data.',
        
        'modal.about.title': 'About Cidadão.AI',
        'modal.about.content': 'Cidadão.AI is a research project, free software and civic engagement, conceived and developed by Anderson Henrique da Silva as an undergraduate thesis, supervised by Prof. Dr. Aracele Garcia de Oliveira Fassbinder.',
        
        'modal.manifesto.title': 'Cidadão.AI Manifesto',
        'modal.manifesto.content': 'For an Artificial Intelligence that Serves the People and Illuminates the State. Cidadão.AI is born from the desire to make public data truly public.',
        
        'modal.system.title': 'Multi-Agent System',
        'modal.system.content': 'Meet our 12 specialized agents, each inspired by Brazilian historical and cultural figures.',
        
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
    }
};

// ===== ESTADO GLOBAL =====
let currentLanguage = 'pt-BR';
let currentTheme = 'light';

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
        'nana', 'lampiao', 'ceuci', 'dandara', 'machado', 'bonifacio'
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
    
    // Botão flutuante
    const floatingBtn = document.querySelector('.floating-button');
    if (floatingBtn) {
        floatingBtn.addEventListener('click', () => {
            openModal('aboutModal');
        });
    }
    
    console.log('🎯 Event listeners inicializados');
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
    scrollToSection
};

console.log('📦 Script Cidadão.AI carregado!');