/**
 * Dynamic Controls - Cidadão.AI
 * 
 * Gerencia botões dinâmicos de tema e idioma que mostram a opção alternativa
 * e alternam entre estados com um único clique
 * 
 * @author Anderson Henrique
 * @version 1.0.0
 */

class DynamicControls {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.currentLang = localStorage.getItem('language') || 'pt-BR';
        
        this.themeButton = document.getElementById('themeToggle');
        this.langButton = document.getElementById('langToggle');
        
        this.init();
    }

    /**
     * Inicializa os controles dinâmicos
     */
    init() {
        this.bindEvents();
        this.updateThemeButton();
        this.updateLangButton();
        this.applyTheme();
        
        console.log('🔄 Dynamic Controls initialized');
    }

    /**
     * Vincula eventos aos botões
     */
    bindEvents() {
        if (this.themeButton) {
            this.themeButton.addEventListener('click', () => this.toggleTheme());
        }
        
        if (this.langButton) {
            this.langButton.addEventListener('click', () => this.toggleLanguage());
        }
    }

    /**
     * Alterna o tema
     */
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        
        this.applyTheme();
        this.updateThemeButton();
        
        // Dispatch evento para outros sistemas
        document.dispatchEvent(new CustomEvent('themeChanged', {
            detail: { theme: this.currentTheme }
        }));
        
        console.log(`🎨 Theme changed to: ${this.currentTheme}`);
    }

    /**
     * Alterna o idioma
     */
    toggleLanguage() {
        this.currentLang = this.currentLang === 'pt-BR' ? 'en-US' : 'pt-BR';
        localStorage.setItem('language', this.currentLang);
        
        this.updateLangButton();
        this.applyLanguage();
        
        // Dispatch evento para outros sistemas
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: this.currentLang }
        }));
        
        console.log(`🌐 Language changed to: ${this.currentLang}`);
    }

    /**
     * Atualiza o botão de tema para mostrar a opção alternativa
     */
    updateThemeButton() {
        if (!this.themeButton) return;
        
        const icon = this.themeButton.querySelector('.btn-icon');
        const text = this.themeButton.querySelector('.btn-text');
        
        if (this.currentTheme === 'light') {
            // Mostra opção para mudar para escuro
            icon.textContent = '🌙';
            text.textContent = 'Escuro';
            this.themeButton.setAttribute('aria-label', 'Ativar tema escuro');
        } else {
            // Mostra opção para mudar para claro
            icon.textContent = '☀️';
            text.textContent = 'Claro';
            this.themeButton.setAttribute('aria-label', 'Ativar tema claro');
        }
    }

    /**
     * Atualiza o botão de idioma para mostrar a opção alternativa
     */
    updateLangButton() {
        if (!this.langButton) return;
        
        const flag = this.langButton.querySelector('.btn-flag');
        const text = this.langButton.querySelector('.btn-text');
        
        if (this.currentLang === 'pt-BR') {
            // Mostra opção para mudar para inglês
            flag.textContent = '🇺🇸';
            text.textContent = 'EN';
            this.langButton.setAttribute('aria-label', 'Switch to English');
        } else {
            // Mostra opção para mudar para português
            flag.textContent = '🇧🇷';
            text.textContent = 'PT';
            this.langButton.setAttribute('aria-label', 'Mudar para Português');
        }
    }

    /**
     * Aplica o tema atual
     */
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        
        // Atualizar meta theme-color para mobile
        const themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (themeColorMeta) {
            themeColorMeta.content = this.currentTheme === 'dark' ? '#1e293b' : '#10b981';
        }
    }

    /**
     * Aplica o idioma atual
     */
    applyLanguage() {
        document.documentElement.setAttribute('lang', this.currentLang);
        
        // Integração com sistema de i18n existente
        if (window.i18n && typeof window.i18n.setLanguage === 'function') {
            window.i18n.setLanguage(this.currentLang);
        }
        
        // Fallback: trigger do sistema existente se disponível
        const langEvent = new CustomEvent('changeLanguage', {
            detail: { language: this.currentLang }
        });
        document.dispatchEvent(langEvent);
    }

    /**
     * Obtém o tema atual
     */
    getCurrentTheme() {
        return this.currentTheme;
    }

    /**
     * Obtém o idioma atual
     */
    getCurrentLanguage() {
        return this.currentLang;
    }

    /**
     * Define o tema programaticamente
     */
    setTheme(theme) {
        if (['light', 'dark'].includes(theme)) {
            this.currentTheme = theme;
            localStorage.setItem('theme', theme);
            this.applyTheme();
            this.updateThemeButton();
        }
    }

    /**
     * Define o idioma programaticamente
     */
    setLanguage(lang) {
        if (['pt-BR', 'en-US'].includes(lang)) {
            this.currentLang = lang;
            localStorage.setItem('language', lang);
            this.updateLangButton();
            this.applyLanguage();
        }
    }

    /**
     * Detecta preferência do sistema
     */
    detectSystemPreferences() {
        // Detectar tema do sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (!localStorage.getItem('theme')) {
                this.setTheme('dark');
            }
        }
        
        // Detectar idioma do navegador
        const browserLang = navigator.language || navigator.userLanguage;
        if (!localStorage.getItem('language')) {
            if (browserLang.startsWith('en')) {
                this.setLanguage('en-US');
            } else {
                this.setLanguage('pt-BR');
            }
        }
    }

    /**
     * Adiciona listener para mudanças de preferência do sistema
     */
    watchSystemPreferences() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addListener((e) => {
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }
}

// Auto-inicialização
document.addEventListener('DOMContentLoaded', () => {
    window.dynamicControls = new DynamicControls();
    
    // Detectar preferências do sistema na primeira visita
    window.dynamicControls.detectSystemPreferences();
    window.dynamicControls.watchSystemPreferences();
});

console.log('🔄 Dynamic Controls v1.0.0 loaded!');