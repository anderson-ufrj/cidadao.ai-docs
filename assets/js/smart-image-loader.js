/**
 * Smart Image Loader - Cidadão.AI
 * 
 * Sistema inteligente de carregamento de imagens com:
 * - WebP detection automática
 * - Lazy loading com Intersection Observer
 * - Fallback para PNG em navegadores antigos
 * - Progressive enhancement
 * 
 * @author Anderson Henrique
 * @version 1.0.0
 */

class SmartImageLoader {
    constructor() {
        this.supportsWebP = false;
        this.isIntersectionObserverSupported = 'IntersectionObserver' in window;
        
        // Lista de imagens dos agentes otimizadas
        this.agentImages = [
            'abaporu', 'anita', 'bonifacio', 'carlos-drummond', 'ceuci',
            'dandara', 'deodoro-fonseca', 'lampiao', 'machado', 'maria-quiteria',
            'nana', 'niemeyer', 'obaluaie', 'senna', 'tiradentes', 'zumbi'
        ];
        
        this.init();
    }

    /**
     * Inicializa o loader
     */
    init() {
        this.detectWebPSupport()
            .then(() => {
                this.addSupportClasses();
                this.setupLazyLoading();
                this.optimizeExistingImages();
                console.log(`🖼️ Smart Image Loader initialized (WebP: ${this.supportsWebP})`);
            });
    }

    /**
     * Detecta suporte a WebP
     */
    detectWebPSupport() {
        return new Promise((resolve) => {
            const webp = new Image();
            webp.onload = webp.onerror = () => {
                this.supportsWebP = webp.height === 2;
                resolve();
            };
            webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    }

    /**
     * Adiciona classes CSS baseadas no suporte
     */
    addSupportClasses() {
        const html = document.documentElement;
        html.classList.add(this.supportsWebP ? 'webp' : 'no-webp');
        html.classList.add(this.isIntersectionObserverSupported ? 'intersection-observer' : 'no-intersection-observer');
    }

    /**
     * Configura lazy loading
     */
    setupLazyLoading() {
        if (!this.isIntersectionObserverSupported) {
            // Fallback: carregar imagens imediatamente
            this.loadAllImages();
            return;
        }

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '50px' // Carregar 50px antes de entrar na viewport
        });

        // Observar imagens lazy
        document.querySelectorAll('img[data-src], [data-lazy-bg]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    /**
     * Carrega uma imagem específica
     */
    loadImage(element) {
        if (element.dataset.src) {
            // Imagem normal
            element.src = this.getOptimizedImageUrl(element.dataset.src);
            element.classList.add('loaded');
        } else if (element.dataset.lazyBg) {
            // Background image
            const bgUrl = this.getOptimizedImageUrl(element.dataset.lazyBg);
            element.style.backgroundImage = `url(${bgUrl})`;
            element.classList.add('loaded');
        }
    }

    /**
     * Obtém URL otimizada baseada no suporte a WebP
     */
    getOptimizedImageUrl(originalUrl) {
        // Se é uma imagem de agente, usar versão otimizada
        const agentMatch = originalUrl.match(/agents\/([^.]+)/);
        if (agentMatch && this.agentImages.includes(agentMatch[1])) {
            const agentName = agentMatch[1];
            const extension = this.supportsWebP ? 'webp' : 'png';
            return `assets/agents-optimized/${agentName}.${extension}`;
        }
        
        return originalUrl;
    }

    /**
     * Otimiza imagens já existentes no DOM
     */
    optimizeExistingImages() {
        // Otimizar avatares do carrossel
        const carouselAvatars = document.querySelectorAll('.carousel-avatar');
        carouselAvatars.forEach(img => {
            const src = img.src || img.getAttribute('src');
            if (src) {
                const optimizedUrl = this.getOptimizedImageUrl(src);
                if (optimizedUrl !== src) {
                    img.src = optimizedUrl;
                }
            }
        });

        // Otimizar outras imagens de agentes
        const agentImages = document.querySelectorAll('img[src*="agents/"]');
        agentImages.forEach(img => {
            const optimizedUrl = this.getOptimizedImageUrl(img.src);
            if (optimizedUrl !== img.src) {
                img.src = optimizedUrl;
            }
        });
    }

    /**
     * Carrega todas as imagens (fallback)
     */
    loadAllImages() {
        document.querySelectorAll('img[data-src], [data-lazy-bg]').forEach(element => {
            this.loadImage(element);
        });
    }

    /**
     * Preload de imagens críticas
     */
    preloadCriticalImages() {
        const criticalImages = [
            'assets/agents-optimized/abaporu.' + (this.supportsWebP ? 'webp' : 'png'),
            'assets/agents-optimized/zumbi.' + (this.supportsWebP ? 'webp' : 'png'),
            'assets/agents-optimized/anita.' + (this.supportsWebP ? 'webp' : 'png')
        ];

        criticalImages.forEach(url => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = url;
            document.head.appendChild(link);
        });

        console.log('🚀 Critical images preloaded');
    }

    /**
     * Força carregamento de uma imagem específica
     */
    forceLoad(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => this.loadImage(element));
    }
}

/**
 * Performance Image Manager
 * 
 * Gerencia performance de imagens com métricas
 */
class PerformanceImageManager {
    constructor() {
        this.loadedImages = 0;
        this.totalImages = 0;
        this.startTime = performance.now();
        
        this.init();
    }

    init() {
        this.countImages();
        this.setupMetrics();
    }

    countImages() {
        this.totalImages = document.querySelectorAll('img, [data-lazy-bg]').length;
    }

    setupMetrics() {
        // Observar carregamento de imagens
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                this.onImageLoad();
            } else {
                img.addEventListener('load', () => this.onImageLoad());
                img.addEventListener('error', () => this.onImageError());
            }
        });
    }

    onImageLoad() {
        this.loadedImages++;
        this.checkCompletion();
    }

    onImageError() {
        console.warn('❌ Image failed to load');
        this.loadedImages++;
        this.checkCompletion();
    }

    checkCompletion() {
        if (this.loadedImages >= this.totalImages) {
            const loadTime = performance.now() - this.startTime;
            console.log(`🏁 All images loaded in ${loadTime.toFixed(0)}ms`);
            
            // Dispatch evento customizado
            document.dispatchEvent(new CustomEvent('allImagesLoaded', {
                detail: { loadTime, totalImages: this.totalImages }
            }));
        }
    }
}

// Auto-inicialização
document.addEventListener('DOMContentLoaded', () => {
    window.smartImageLoader = new SmartImageLoader();
    window.performanceImageManager = new PerformanceImageManager();
    
    // Preload após 100ms
    setTimeout(() => {
        window.smartImageLoader.preloadCriticalImages();
    }, 100);
});

// CSS para lazy loading
const lazyLoadingCSS = `
/* Lazy Loading Styles */
img[data-src], [data-lazy-bg] {
    opacity: 0;
    transition: opacity 0.3s ease;
}

img[data-src].loaded, [data-lazy-bg].loaded {
    opacity: 1;
}

/* Skeleton loading para imagens */
.image-skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}

/* Otimizações para WebP */
.webp .carousel-avatar {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
}

.no-webp .carousel-avatar {
    image-rendering: auto;
}
`;

// Injetar CSS
const style = document.createElement('style');
style.textContent = lazyLoadingCSS;
document.head.appendChild(style);

console.log('🖼️ Smart Image Loader v1.0.0 loaded!');