/**
 * Smart Component Engine - Cidadão.AI Enhanced Architecture
 * Loads and manages modular components while preserving 100% original functionality
 */

class ComponentEngine {
    constructor() {
        this.cache = new Map();
        this.components = new Map();
        this.loadedComponents = new Set();
        this.observers = new Map();
        
        // Component registry
        this.registry = {
            'header': { 
                path: 'src/components/sections/Header.html',
                target: '#header-container',
                dependencies: []
            },
            'hero': { 
                path: 'src/components/sections/Hero.html',
                target: '#hero-container',
                dependencies: []
            },
            'carousel': { 
                path: 'src/components/sections/Carousel.html',
                target: '#carousel-container',
                dependencies: ['carousel.js']
            },
            'repositories': { 
                path: 'src/components/sections/Repositories.html',
                target: '#repositories-container',
                dependencies: []
            },
            'links': { 
                path: 'src/components/sections/Links.html',
                target: '#links-container',
                dependencies: []
            },
            'api-docs': { 
                path: 'src/components/sections/ApiDocs.html',
                target: '#api-docs-container',
                dependencies: []
            },
            'modals': { 
                path: 'src/components/sections/Modals.html',
                target: '#modals-container',
                dependencies: ['script.js']
            }
        };
    }

    /**
     * Load component with caching
     */
    async loadComponent(name) {
        if (this.cache.has(name)) {
            return this.cache.get(name);
        }

        const config = this.registry[name];
        if (!config) {
            throw new Error(`Component '${name}' not found in registry`);
        }

        try {
            const response = await fetch(config.path);
            if (!response.ok) {
                throw new Error(`Failed to load component '${name}': ${response.status}`);
            }
            
            const html = await response.text();
            this.cache.set(name, html);
            
            return html;
        } catch (error) {
            console.error(`Error loading component '${name}':`, error);
            throw error;
        }
    }

    /**
     * Render component to target
     */
    async renderComponent(name, data = {}) {
        const config = this.registry[name];
        const html = await this.loadComponent(name);
        
        // Process template with data (simple variable replacement)
        const processedHtml = this.processTemplate(html, data);
        
        // Find target element
        const target = document.querySelector(config.target);
        if (!target) {
            console.warn(`Target element '${config.target}' not found for component '${name}'`);
            return;
        }

        // Render component
        target.innerHTML = processedHtml;
        
        // Load dependencies
        await this.loadDependencies(config.dependencies);
        
        // Mark as loaded
        this.loadedComponents.add(name);
        
        // Trigger observers
        this.notifyObservers(name, 'loaded');
        
        console.log(`✅ Component '${name}' loaded successfully`);
    }

    /**
     * Simple template processing (preserves original functionality)
     */
    processTemplate(html, data) {
        let processed = html;
        
        // Simple variable replacement: {{variable}}
        for (const [key, value] of Object.entries(data)) {
            const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
            processed = processed.replace(regex, value);
        }
        
        return processed;
    }

    /**
     * Load component dependencies (CSS/JS)
     */
    async loadDependencies(dependencies) {
        const promises = dependencies.map(dep => this.loadDependency(dep));
        await Promise.all(promises);
    }

    /**
     * Load individual dependency
     */
    async loadDependency(dependency) {
        if (document.querySelector(`[data-dependency="${dependency}"]`)) {
            return; // Already loaded
        }

        const isCSS = dependency.endsWith('.css');
        const isJS = dependency.endsWith('.js');
        
        if (isCSS) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `assets/css/${dependency}`;
            link.setAttribute('data-dependency', dependency);
            document.head.appendChild(link);
        } else if (isJS) {
            const script = document.createElement('script');
            script.src = `assets/js/${dependency}`;
            script.setAttribute('data-dependency', dependency);
            document.head.appendChild(script);
        }
    }

    /**
     * Load all components in sequence
     */
    async loadAll() {
        const startTime = performance.now();
        
        try {
            // Load components in order
            const componentNames = Object.keys(this.registry);
            
            for (const name of componentNames) {
                await this.renderComponent(name);
            }
            
            // Initialize original scripts after all components are loaded
            await this.initializeOriginalScripts();
            
            const endTime = performance.now();
            console.log(`🚀 All components loaded in ${(endTime - startTime).toFixed(2)}ms`);
            
        } catch (error) {
            console.error('❌ Error loading components:', error);
            throw error;
        }
    }

    /**
     * Initialize original scripts to preserve functionality
     */
    async initializeOriginalScripts() {
        // Preserve original script functionality
        if (window.initializeCarousel) {
            window.initializeCarousel();
        }
        
        if (window.initializeModals) {
            window.initializeModals();
        }
        
        if (window.initializeTheme) {
            window.initializeTheme();
        }
        
        if (window.initializeI18n) {
            window.initializeI18n();
        }
    }

    /**
     * Observer pattern for component lifecycle
     */
    on(event, callback) {
        if (!this.observers.has(event)) {
            this.observers.set(event, []);
        }
        this.observers.get(event).push(callback);
    }

    notifyObservers(component, event) {
        const callbacks = this.observers.get(event) || [];
        callbacks.forEach(callback => callback(component));
    }

    /**
     * Development helpers
     */
    getLoadedComponents() {
        return Array.from(this.loadedComponents);
    }

    getCacheSize() {
        return this.cache.size;
    }

    clearCache() {
        this.cache.clear();
        console.log('🧹 Component cache cleared');
    }
}

// Export for use
window.ComponentEngine = ComponentEngine;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Initializing Enhanced Component System...');
    
    window.componentEngine = new ComponentEngine();
    
    // Load all components
    try {
        await window.componentEngine.loadAll();
        console.log('✅ Enhanced Component System ready!');
    } catch (error) {
        console.error('❌ Failed to initialize component system:', error);
    }
});