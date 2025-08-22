/**
 * Performance Optimizer - Cidadão.AI Mobile
 * 
 * Sistema adaptativo para otimizar performance em dispositivos mobile
 * Detecta capacidade do device e ajusta animações automaticamente
 * 
 * @author Anderson Henrique
 * @version 1.0.0
 */

class PerformanceOptimizer {
    constructor() {
        this.isLowEndDevice = this.detectLowEndDevice();
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.connectionSpeed = this.getConnectionSpeed();
        this.deviceMemory = navigator.deviceMemory || 4; // GB
        
        this.init();
    }

    /**
     * Detecta dispositivos de baixo desempenho
     */
    detectLowEndDevice() {
        const hardwareConcurrency = navigator.hardwareConcurrency || 2;
        const deviceMemory = navigator.deviceMemory || 4;
        
        // Considera low-end se:
        // - Menos de 4 cores
        // - Menos de 4GB RAM
        // - Connection lenta
        return hardwareConcurrency < 4 || deviceMemory < 4;
    }

    /**
     * Detecta velocidade da conexão
     */
    getConnectionSpeed() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        
        if (!connection) return 'unknown';
        
        if (connection.effectiveType) {
            return connection.effectiveType; // '4g', '3g', '2g', 'slow-2g'
        }
        
        return 'unknown';
    }

    /**
     * Inicializa otimizações
     */
    init() {
        this.optimizeCarouselAnimation();
        this.optimizeButtonAnimation();
        this.setupPerformanceMonitoring();
        this.addPerformanceClasses();
        
        console.log('🚀 Performance Optimizer initialized:', {
            lowEndDevice: this.isLowEndDevice,
            reducedMotion: this.prefersReducedMotion,
            connectionSpeed: this.connectionSpeed,
            deviceMemory: this.deviceMemory
        });
    }

    /**
     * Otimiza animação do carrossel
     */
    optimizeCarouselAnimation() {
        const track = document.querySelector('.agents-carousel-track');
        if (!track) return;

        if (this.isLowEndDevice || this.prefersReducedMotion) {
            // Desabilita ou simplifica animação
            track.style.animationDuration = '0s';
            track.classList.add('performance-mode');
        } else if (this.connectionSpeed === '2g' || this.connectionSpeed === 'slow-2g') {
            // Reduz velocidade da animação em conexões lentas
            track.style.animationDuration = '90s'; // Mais lento
        }
    }

    /**
     * Otimiza animação do botão
     */
    optimizeButtonAnimation() {
        const button = document.querySelector('.carousel-floating-btn');
        if (!button) return;

        if (this.isLowEndDevice || this.prefersReducedMotion) {
            // Remove animação pulse em dispositivos low-end
            button.style.animation = 'none';
            button.classList.add('no-animation');
        } else {
            // Mantém animação suave
            button.style.willChange = 'transform, box-shadow';
        }
    }

    /**
     * Monitora performance em tempo real
     */
    setupPerformanceMonitoring() {
        if (!('PerformanceObserver' in window)) return;

        // Monitora Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((entryList) => {
            const lastEntry = entryList.getEntries().pop();
            
            if (lastEntry.startTime > 3000) {
                // LCP > 3s, ativa modo performance
                document.body.classList.add('performance-mode');
                this.enablePerformanceMode();
            }
        });

        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Monitora First Input Delay
        const fidObserver = new PerformanceObserver((entryList) => {
            const fidEntries = entryList.getEntries();
            
            fidEntries.forEach(entry => {
                const fid = entry.processingStart - entry.startTime;
                
                if (fid > 100) {
                    // FID > 100ms, otimiza interações
                    this.optimizeInteractions();
                }
            });
        });

        fidObserver.observe({ entryTypes: ['first-input'] });
    }

    /**
     * Ativa modo alta performance
     */
    enablePerformanceMode() {
        // Remove todas as animações não-essenciais
        const style = document.createElement('style');
        style.textContent = `
            .performance-mode * {
                animation-duration: 0.1s !important;
                transition-duration: 0.1s !important;
            }
            .performance-mode .agents-carousel-track {
                animation: none !important;
            }
        `;
        document.head.appendChild(style);
        
        console.log('⚡ Performance mode activated');
    }

    /**
     * Otimiza interações touch
     */
    optimizeInteractions() {
        // Adiciona passive listeners para melhor scroll performance
        const touchElements = document.querySelectorAll('.carousel-agent, .carousel-floating-btn');
        
        touchElements.forEach(element => {
            element.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
            element.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
        });
    }

    /**
     * Handlers de touch otimizados
     */
    handleTouchStart(e) {
        e.target.style.willChange = 'transform';
        e.target.style.transform = 'scale(0.98)';
    }

    handleTouchEnd(e) {
        e.target.style.willChange = 'auto';
        e.target.style.transform = '';
    }

    /**
     * Adiciona classes CSS baseadas na performance
     */
    addPerformanceClasses() {
        const body = document.body;
        
        if (this.isLowEndDevice) {
            body.classList.add('low-end-device');
        }
        
        if (this.prefersReducedMotion) {
            body.classList.add('reduced-motion');
        }
        
        if (this.connectionSpeed === '2g' || this.connectionSpeed === 'slow-2g') {
            body.classList.add('slow-connection');
        }
        
        body.classList.add(`connection-${this.connectionSpeed}`);
    }

    /**
     * Limpa recursos quando necessário
     */
    cleanup() {
        // Remove observers e event listeners
        if (this.lcpObserver) this.lcpObserver.disconnect();
        if (this.fidObserver) this.fidObserver.disconnect();
    }
}

// Auto-inicialização quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.PerformanceOptimizer = new PerformanceOptimizer();
    });
} else {
    window.PerformanceOptimizer = new PerformanceOptimizer();
}

// Cleanup no unload
window.addEventListener('beforeunload', () => {
    if (window.PerformanceOptimizer) {
        window.PerformanceOptimizer.cleanup();
    }
});

console.log('📊 Performance Optimizer module loaded');