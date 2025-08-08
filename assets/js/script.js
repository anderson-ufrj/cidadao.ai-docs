// Cidadão.AI - JavaScript Principal

// ===== TRADUÇÕES ===== 
const translations = {
    'pt-BR': {
        'site.title': 'Cidadão.AI — Hub de Documentação',
        'nav.theme.light': '☀️ Claro',
        'nav.theme.dark': '🌙 Escuro',
        'nav.theme.light.short': 'Claro',
        'nav.theme.dark.short': 'Escuro',
        'nav.lang.pt': '🇧🇷 PT',
        'nav.lang.en': '🇺🇸 EN',
        'nav.lang.pt.short': 'PT',
        'nav.lang.en.short': 'EN',
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
        
        // Footer translations
        'footer.project.title': 'Cidadão.AI',
        'footer.project.description': 'Sistema multi-agente para transparência pública brasileira',
        'footer.author.title': 'Desenvolvido por',
        'footer.author.role': 'Engenheiro de Sistemas de IA | Bacharelando em Ciência da Computação',
        'footer.links.github': '🔗 GitHub',
        'footer.links.linkedin': '💼 LinkedIn',
        'footer.links.email': '📧 E-mail',
        'footer.academic.title': 'Orientação Acadêmica',
        'footer.academic.institution': 'Instituto Federal do Sul de Minas Gerais',
        'footer.copyright': '© 2025 Anderson Henrique da Silva. Projeto de pesquisa acadêmica sob licença Apache 2.0.',
        'footer.badges.ods': '🎯 ODS 16',
        'footer.badges.openGov': '🏛️ Open Gov',
        
        // Floating button
        'floating.button.aria': 'Abrir informações sobre o projeto',
        
        // Modal About content
        'modal.close.aria': 'Fechar modal',
        'modal.about.intro': '<strong>Cidadão.AI</strong> é um projeto de pesquisa, software livre e engajamento cívico, idealizado e desenvolvido por Anderson Henrique da Silva, como Trabalho de Conclusão de Curso (TCC), sob a orientação da Profa. Dra. Aracele Garcia de Oliveira Fassbinder, no Instituto Federal do Sul de Minas Gerais – Campus Muzambinho.',
        'modal.about.purpose': 'Este sistema multi-agente foi concebido com o propósito de democratizar o acesso aos dados públicos brasileiros, unindo ética, tecnologia e cidadania.',
        'modal.about.author.title': '👨‍💻 Autor',
        'modal.about.author.role': 'Bacharelando em Ciência da Computação | Engenheiro de Sistemas de IA',
        'modal.about.supervision.title': '🧠 Orientação Acadêmica',
        'modal.about.supervision.institution': '📍 Instituto Federal do Sul de Minas Gerais – Campus Muzambinho',
        'modal.about.supervision.lattes': '🔗 Currículo Lattes',
        
        // Meta tags
        'meta.description': 'Hub central de documentação do projeto Cidadão.AI - Sistema multi-agente de IA para transparência pública',
        'meta.keywords': 'Cidadão.AI, transparência pública, IA ética, open government, ODS 16',
        
        // Navigation
        'nav.aria.main': 'Navegação principal',
        'nav.logo.aria': 'Cidadão.AI - Página inicial',
        
        // Repositories
        'repositories.backend.title': 'Backend (FastAPI)',
        'repositories.backend.description': 'API e sistema multi-agente',
        'repositories.frontend.title': 'Frontend (Next.js)',
        'repositories.frontend.description': 'Interface web moderna',
        'repositories.docs.title': 'Documentação',
        'repositories.docs.description': 'Hub central de docs',
        'repositories.models.title': 'Modelos IA',
        'repositories.models.description': 'Scripts ML e modelos',
        
        // Project Links
        'links.webapp.title': 'Aplicação Web',
        'links.webapp.description': 'Plataforma Cidadão.AI em produção',
        'links.api.title': 'API Backend',
        'links.api.description': 'Hospedado no Hugging Face Spaces',
        'links.monitor.title': 'Monitor do Sistema',
        'links.monitor.description': 'Monitoramento em tempo real do backend',
        'links.technical.title': 'Docs Técnicas',
        'links.technical.description': 'Documentação completa do backend',
        'links.research.title': 'Notas de Pesquisa',
        'links.research.description': 'PDF com insights do projeto',
        
        // API iframe
        'api.iframe.title': 'Documentação da API Cidadão.AI',
        
        // Modal About - Technical sections
        'modal.about.tech.title': '🧰 Tecnologias Utilizadas',
        'modal.about.tech.frontend': '<strong>Frontend:</strong> Next.js 15, React 19, TypeScript 5, Tailwind CSS 4',
        'modal.about.tech.backend': '<strong>Backend:</strong> FastAPI, Python 3.11+, PostgreSQL 16, Redis 7',
        'modal.about.tech.ai': '<strong>IA/ML:</strong> LangChain, Transformers, OpenAI/Groq, ChromaDB, FAISS',
        'modal.about.tech.deploy': '<strong>Deploy:</strong> Docker, Kubernetes, Vercel, HuggingFace Spaces',
        'modal.about.tech.observability': '<strong>Observabilidade:</strong> Prometheus, Grafana, OpenTelemetry, Structured Logging',
        'modal.about.licenses.title': '🔐 Licenças e Direitos',
        'modal.about.licenses.project': '<strong>Projeto:</strong> Apache 2.0 (Software Livre)',
        'modal.about.licenses.data': '<strong>Dados:</strong> Creative Commons BY 4.0',
        'modal.about.licenses.docs': '<strong>Documentação:</strong> Creative Commons BY-SA 4.0',
        'modal.about.institutional.title': '🏛️ Apoio Institucional',
        'modal.about.institutional.ifsuldeminas': '<strong>Instituto Federal do Sul de Minas Gerais</strong> - Campus Muzambinho',
        'modal.about.institutional.cnpq': '<strong>CNPq</strong> - Conselho Nacional de Desenvolvimento Científico e Tecnológico',
        'modal.about.institutional.capes': '<strong>CAPES</strong> - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior',
        'modal.about.institutional.gov': '<strong>Portal da Transparência</strong> - Controladoria-Geral da União',
        'modal.about.research.title': '📚 Notas de Pesquisa do Autor',
        'modal.about.research.content': 'Acesse as <strong>notas técnicas completas</strong> do projeto, incluindo arquitetura, metodologia e resultados de pesquisa no documento oficial:',
        'modal.about.research.link': '📄 Baixar PDF das Notas de Pesquisa',
        'modal.about.official.title': '🌐 Links Oficiais',
        'modal.about.official.hub.title': 'Hub de Documentação Oficial',
        'modal.about.official.hub.description': 'Documentação completa do projeto, guias de uso, arquitetura e API.',
        
        // Modal Manifesto
        'modal.manifesto.heading': '🇧🇷 Por uma Inteligência Artificial que Serve ao Povo e Ilumina o Estado',
        'modal.manifesto.intro.title': 'Introdução',
        'modal.manifesto.intro.content': 'O Cidadão.AI nasce da vontade de tornar os dados públicos verdadeiramente públicos. Em tempos onde a informação é poder, democratizar o acesso aos dados governamentais é democratizar o próprio poder.',
        'modal.manifesto.mission.title': 'Missão',
        'modal.manifesto.mission.content': 'Nossa missão é criar uma inteligência artificial que trabalhe incansavelmente para fortalecer a transparência, combater a corrupção e empoderar cada cidadão com informação clara, precisa e auditável.',
        'modal.manifesto.transparency.title': 'Transparência como prática radical',
        'modal.manifesto.transparency.content': 'Acreditamos que transparência não é apenas mostrar números, mas torná-los compreensíveis, contextualizados e actionáveis. Nossa IA não apenas coleta dados - ela os interpreta, analisa padrões e identifica anomalias.',
        'modal.manifesto.vision.title': 'Visão de futuro',
        'modal.manifesto.vision.content': 'Sonhamos com um Brasil onde cada real público seja rastreável, onde cada decisão governamental seja explicável e onde cada cidadão tenha o poder de questionar, entender e fiscalizar.',
        'modal.manifesto.quote': '"Transparência não é um favor. É fundamento de uma democracia viva."',
    },
    
    'en-US': {
        'site.title': 'Cidadão.AI — Documentation Hub',
        'nav.theme.light': '☀️ Light',
        'nav.theme.dark': '🌙 Dark',
        'nav.theme.light.short': 'Light',
        'nav.theme.dark.short': 'Dark',
        'nav.lang.pt': '🇧🇷 PT',
        'nav.lang.en': '🇺🇸 EN',
        'nav.lang.pt.short': 'PT',
        'nav.lang.en.short': 'EN',
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
        
        // Footer translations
        'footer.project.title': 'Cidadão.AI',
        'footer.project.description': 'Multi-agent system for Brazilian public transparency',
        'footer.author.title': 'Developed by',
        'footer.author.role': 'AI Systems Engineer | Computer Science Student',
        'footer.links.github': '🔗 GitHub',
        'footer.links.linkedin': '💼 LinkedIn',
        'footer.links.email': '📧 E-mail',
        'footer.academic.title': 'Academic Supervision',
        'footer.academic.institution': 'Federal Institute of Southern Minas Gerais',
        'footer.copyright': '© 2025 Anderson Henrique da Silva. Academic research project under Apache 2.0 license.',
        'footer.badges.ods': '🎯 SDG 16',
        'footer.badges.openGov': '🏛️ Open Gov',
        
        // Floating button
        'floating.button.aria': 'Open project information',
        
        // Modal About content
        'modal.close.aria': 'Close modal',
        'modal.about.intro': '<strong>Cidadão.AI</strong> is a research project, free software and civic engagement, conceived and developed by Anderson Henrique da Silva as an undergraduate thesis (TCC), under the supervision of Prof. Dr. Aracele Garcia de Oliveira Fassbinder, at the Federal Institute of Southern Minas Gerais – Muzambinho Campus.',
        'modal.about.purpose': 'This multi-agent system was conceived with the purpose of democratizing access to Brazilian public data, uniting ethics, technology and citizenship.',
        'modal.about.author.title': '👨‍💻 Author',
        'modal.about.author.role': 'Computer Science Student | AI Systems Engineer',
        'modal.about.supervision.title': '🧠 Academic Supervision',
        'modal.about.supervision.institution': '📍 Federal Institute of Southern Minas Gerais – Muzambinho Campus',
        'modal.about.supervision.lattes': '🔗 Lattes CV',
        
        // Meta tags
        'meta.description': 'Central documentation hub for Cidadão.AI project - Multi-agent AI system for public transparency',
        'meta.keywords': 'Cidadão.AI, public transparency, ethical AI, open government, SDG 16',
        
        // Navigation
        'nav.aria.main': 'Main navigation',
        'nav.logo.aria': 'Cidadão.AI - Home',
        
        // Repositories
        'repositories.backend.title': 'Backend (FastAPI)',
        'repositories.backend.description': 'API and multi-agent system',
        'repositories.frontend.title': 'Frontend (Next.js)',
        'repositories.frontend.description': 'Modern web interface',
        'repositories.docs.title': 'Documentation',
        'repositories.docs.description': 'Central docs hub',
        'repositories.models.title': 'AI Models',
        'repositories.models.description': 'ML scripts and models',
        
        // Project Links
        'links.webapp.title': 'Web Application',
        'links.webapp.description': 'Cidadão.AI platform in production',
        'links.api.title': 'Backend API',
        'links.api.description': 'Hosted on Hugging Face Spaces',
        'links.monitor.title': 'System Monitor',
        'links.monitor.description': 'Real-time backend monitoring',
        'links.technical.title': 'Technical Docs',
        'links.technical.description': 'Complete backend documentation',
        'links.research.title': 'Research Notes',
        'links.research.description': 'PDF with project insights',
        
        // API iframe
        'api.iframe.title': 'Cidadão.AI API Documentation',
        
        // Modal About - Technical sections
        'modal.about.tech.title': '🧰 Technologies Used',
        'modal.about.tech.frontend': '<strong>Frontend:</strong> Next.js 15, React 19, TypeScript 5, Tailwind CSS 4',
        'modal.about.tech.backend': '<strong>Backend:</strong> FastAPI, Python 3.11+, PostgreSQL 16, Redis 7',
        'modal.about.tech.ai': '<strong>AI/ML:</strong> LangChain, Transformers, OpenAI/Groq, ChromaDB, FAISS',
        'modal.about.tech.deploy': '<strong>Deploy:</strong> Docker, Kubernetes, Vercel, HuggingFace Spaces',
        'modal.about.tech.observability': '<strong>Observability:</strong> Prometheus, Grafana, OpenTelemetry, Structured Logging',
        'modal.about.licenses.title': '🔐 Licenses and Rights',
        'modal.about.licenses.project': '<strong>Project:</strong> Apache 2.0 (Free Software)',
        'modal.about.licenses.data': '<strong>Data:</strong> Creative Commons BY 4.0',
        'modal.about.licenses.docs': '<strong>Documentation:</strong> Creative Commons BY-SA 4.0',
        'modal.about.institutional.title': '🏛️ Institutional Support',
        'modal.about.institutional.ifsuldeminas': '<strong>Federal Institute of Southern Minas Gerais</strong> - Muzambinho Campus',
        'modal.about.institutional.cnpq': '<strong>CNPq</strong> - National Council for Scientific and Technological Development',
        'modal.about.institutional.capes': '<strong>CAPES</strong> - Coordination for the Improvement of Higher Education Personnel',
        'modal.about.institutional.gov': '<strong>Transparency Portal</strong> - Federal Comptroller General',
        'modal.about.research.title': '📚 Author Research Notes',
        'modal.about.research.content': 'Access the <strong>complete technical notes</strong> of the project, including architecture, methodology and research results in the official document:',
        'modal.about.research.link': '📄 Download Research Notes PDF',
        'modal.about.official.title': '🌐 Official Links',
        'modal.about.official.hub.title': 'Official Documentation Hub',
        'modal.about.official.hub.description': 'Complete project documentation, usage guides, architecture and API.',
        
        // Modal Manifesto
        'modal.manifesto.heading': '🇧🇷 For an Artificial Intelligence that Serves the People and Illuminates the State',
        'modal.manifesto.intro.title': 'Introduction',
        'modal.manifesto.intro.content': 'Cidadão.AI is born from the desire to make public data truly public. In times where information is power, democratizing access to government data is democratizing power itself.',
        'modal.manifesto.mission.title': 'Mission',
        'modal.manifesto.mission.content': 'Our mission is to create an artificial intelligence that works tirelessly to strengthen transparency, fight corruption and empower every citizen with clear, accurate and auditable information.',
        'modal.manifesto.transparency.title': 'Transparency as radical practice',
        'modal.manifesto.transparency.content': 'We believe that transparency is not just showing numbers, but making them understandable, contextualized and actionable. Our AI does not just collect data - it interprets it, analyzes patterns and identifies anomalies.',
        'modal.manifesto.vision.title': 'Vision for the future',
        'modal.manifesto.vision.content': 'We dream of a Brazil where every public real is traceable, where every government decision is explainable and where every citizen has the power to question, understand and oversee.',
        'modal.manifesto.quote': '"Transparency is not a favor. It is the foundation of a living democracy."',
    }
};

// ===== ESTADO GLOBAL =====
let currentLanguage = 'pt-BR';
let currentTheme = 'light';

// ===== FUNÇÃO UTILITÁRIA =====
function getTranslation(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] 
        ? translations[currentLanguage][key] 
        : key;
}

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
    
    // Criar botão flutuante
    recreateFloatingButton();
    
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
            const content = translations[lang][key];
            // Se contém HTML, usar innerHTML; senão, textContent
            if (content.includes('<') || content.includes('&')) {
                element.innerHTML = content;
            } else {
                element.textContent = content;
            }
        }
    });
    
    // Atualizar elementos com data-i18n-aria (aria-label)
    const ariaElements = document.querySelectorAll('[data-i18n-aria]');
    ariaElements.forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            element.setAttribute('aria-label', translations[lang][key]);
        }
    });
    
    // Atualizar elementos com data-i18n-title (title attribute)
    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        if (translations[lang][key]) {
            element.setAttribute('title', translations[lang][key]);
        }
    });
    
    // Recriar botão flutuante com nova tradução
    recreateFloatingButton();
    
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
    
    // EXTERMINADOR NUCLEAR DE ELEMENTOS VERDES (DESABILITADO)
    // setTimeout(() => {
    //     cleanupGreenElements();
    // }, 5000);
    
    // Limpeza moderada apenas se necessário
    // setInterval(() => {
    //     cleanupGreenElements();
    // }, 10000);
    
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
                !el.classList.contains('floating-button') &&
                !el.classList.contains('floating-button-info') &&
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

function destroyAllGreenElements() {
    // Função placeholder para evitar erros
    // Desabilitada para não interferir com o botão flutuante
    console.log('🚫 destroyAllGreenElements desabilitada');
}

// ===== BOTÃO FLUTUANTE SIMPLES =====
function recreateFloatingButton() {
    console.log('🚀 Criando botão flutuante...');
    
    // Remover botões antigos EXCETO o que vamos criar
    const oldButtons = document.querySelectorAll('.floating-button-old, .floating-button-dynamic, .floating-button-module');
    oldButtons.forEach(btn => btn.remove());
    
    // Verificar se já existe
    if (document.querySelector('.floating-button-info')) {
        console.log('⚠️ Botão já existe, não criando duplicata');
        return;
    }
    
    // Criar novo botão HTML simples
    const button = document.createElement('button');
    button.className = 'floating-button-info';
    button.innerHTML = 'ℹ️';
    button.setAttribute('aria-label', getTranslation('floating.button.aria'));
    button.setAttribute('data-button-type', 'about-info');
    button.style.cssText = `
        position: fixed !important;
        bottom: 2rem !important;
        right: 2rem !important;
        width: 60px !important;
        height: 60px !important;
        border-radius: 50% !important;
        background: linear-gradient(135deg, #10b981, #059669) !important;
        color: white !important;
        border: none !important;
        cursor: pointer !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 1.5rem !important;
        box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3) !important;
        transition: all 0.3s ease !important;
        z-index: 99999 !important;
        user-select: none !important;
        outline: none !important;
        opacity: 1 !important;
        visibility: visible !important;
    `;
    
    // Event listeners
    button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🚀 Botão flutuante clicado!');
        openModal('aboutModal');
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 6px 25px rgba(16, 185, 129, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 4px 20px rgba(16, 185, 129, 0.3)';
    });
    
    // Adicionar ao DOM
    document.body.appendChild(button);
    console.log('✅ Botão flutuante criado com classe:', button.className);
    console.log('✅ Botão no DOM:', document.body.contains(button));
    
    // Verificação adicional
    setTimeout(() => {
        const verificacao = document.querySelector('.floating-button-info');
        if (verificacao) {
            console.log('✅ Botão ainda existe após 2s:', verificacao);
        } else {
            console.error('❌ Botão foi removido!');
        }
    }, 2000);
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

// ===== INICIALIZAÇÃO FINAL =====
// Garantir criação do botão com múltiplas tentativas
setTimeout(() => {
    console.log('🔄 Tentativa adicional de criar botão...');
    recreateFloatingButton();
}, 2000);

setTimeout(() => {
    console.log('🔄 Última tentativa de criar botão...');
    recreateFloatingButton();
}, 4000);

console.log('📦 Script Cidadão.AI carregado!');