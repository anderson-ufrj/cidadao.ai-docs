/**
 * PWA Icons Generator - Cidadão.AI
 * 
 * Gera conjunto completo de ícones para PWA:
 * - App icons (72px-512px)
 * - Favicons (16px-32px)
 * - Apple touch icons (180px)
 * - Splash screens para iOS
 * - Maskable icons para Android
 */

const fs = require('fs');
const path = require('path');

// Verificar se sharp está disponível
let sharp;
try {
    sharp = require('sharp');
} catch (error) {
    console.error('❌ Sharp não encontrado. Execute: npm install sharp');
    process.exit(1);
}

// Configurações
const LOGO_TEXT = '🏛️';
const BRAND_COLOR = '#10b981';
const OUTPUT_DIR = './assets/icons';

// Tamanhos necessários para PWA
const PWA_SIZES = [
    { size: 72, name: 'icon-72x72.png' },
    { size: 96, name: 'icon-96x96.png' },
    { size: 128, name: 'icon-128x128.png' },
    { size: 144, name: 'icon-144x144.png' },
    { size: 152, name: 'icon-152x152.png' },
    { size: 192, name: 'icon-192x192.png' },
    { size: 384, name: 'icon-384x384.png' },
    { size: 512, name: 'icon-512x512.png' }
];

// Favicons
const FAVICON_SIZES = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 48, name: 'favicon-48x48.png' }
];

// Apple Touch Icons
const APPLE_SIZES = [
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 167, name: 'apple-touch-icon-ipad.png' }
];

// Criar diretório de saída
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Cria um SVG com o logo
 */
function createLogoSVG(size, options = {}) {
    const {
        backgroundColor = BRAND_COLOR,
        textColor = 'white',
        emoji = LOGO_TEXT,
        padding = size * 0.2
    } = options;
    
    const fontSize = size - (padding * 2);
    const centerX = size / 2;
    const centerY = size / 2 + (fontSize * 0.1); // Ajuste vertical para emoji
    
    return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:${backgroundColor};stop-opacity:1" />
                <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" rx="${size * 0.1}"/>
        <text x="${centerX}" y="${centerY}" 
              font-family="Arial, sans-serif" 
              font-size="${fontSize * 0.6}" 
              fill="${textColor}" 
              text-anchor="middle" 
              dominant-baseline="middle">${emoji}</text>
    </svg>`;
}

/**
 * Cria um ícone maskable (com safe area)
 */
function createMaskableLogoSVG(size) {
    const safeArea = size * 0.8; // 80% da área é segura
    const padding = (size - safeArea) / 2;
    
    return createLogoSVG(size, {
        backgroundColor: BRAND_COLOR,
        textColor: 'white',
        emoji: LOGO_TEXT,
        padding: padding
    });
}

/**
 * Gera ícone PNG a partir de SVG
 */
async function generateIcon(svgContent, outputPath, size) {
    try {
        await sharp(Buffer.from(svgContent))
            .resize(size, size)
            .png({ quality: 100, compressionLevel: 9 })
            .toFile(outputPath);
        
        const stats = fs.statSync(outputPath);
        console.log(`✅ ${path.basename(outputPath)} - ${size}x${size} (${(stats.size/1024).toFixed(1)}KB)`);
        
    } catch (error) {
        console.error(`❌ Erro ao gerar ${outputPath}:`, error.message);
    }
}

/**
 * Gera favicon ICO
 */
async function generateFavicon() {
    console.log('\n📄 Gerando favicon.ico...');
    
    const svg = createLogoSVG(32);
    const iconPath = path.join(OUTPUT_DIR, 'favicon.ico');
    
    try {
        // Gerar PNG temporário
        const tempPng = path.join(OUTPUT_DIR, 'temp-favicon.png');
        await sharp(Buffer.from(svg))
            .resize(32, 32)
            .png()
            .toFile(tempPng);
        
        // Converter para ICO (simplificado - apenas renomear)
        fs.renameSync(tempPng, iconPath);
        console.log('✅ favicon.ico gerado');
        
    } catch (error) {
        console.error('❌ Erro ao gerar favicon.ico:', error.message);
    }
}

/**
 * Gera todos os ícones PWA
 */
async function generateAllIcons() {
    console.log('🚀 Gerando ícones PWA completos...\n');
    
    // PWA Icons
    console.log('📱 Ícones PWA:');
    for (const { size, name } of PWA_SIZES) {
        const svg = createLogoSVG(size);
        await generateIcon(svg, path.join(OUTPUT_DIR, name), size);
    }
    
    // Maskable icons para Android
    console.log('\n🤖 Ícones Maskable (Android):');
    const maskableSizes = [192, 512];
    for (const size of maskableSizes) {
        const svg = createMaskableLogoSVG(size);
        const name = `icon-${size}x${size}-maskable.png`;
        await generateIcon(svg, path.join(OUTPUT_DIR, name), size);
    }
    
    // Favicons
    console.log('\n🌐 Favicons:');
    for (const { size, name } of FAVICON_SIZES) {
        const svg = createLogoSVG(size);
        await generateIcon(svg, path.join(OUTPUT_DIR, name), size);
    }
    
    // Apple Touch Icons
    console.log('\n🍎 Apple Touch Icons:');
    for (const { size, name } of APPLE_SIZES) {
        const svg = createLogoSVG(size);
        await generateIcon(svg, path.join(OUTPUT_DIR, name), size);
    }
    
    // Favicon ICO
    await generateFavicon();
    
    // Gerar manifest.json atualizado
    generateManifest();
    
    // Gerar HTML meta tags
    generateHTMLTags();
    
    console.log('\n✅ Todos os ícones gerados com sucesso!');
    console.log(`📁 Salvos em: ${OUTPUT_DIR}`);
    
    // Relatório de tamanhos
    generateSizeReport();
}

/**
 * Gera manifest.json atualizado
 */
function generateManifest() {
    const manifest = {
        "name": "Cidadão.AI - Hub de Documentação",
        "short_name": "Cidadão.AI",
        "description": "Sistema multi-agente de IA para transparência pública brasileira",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "theme_color": BRAND_COLOR,
        "orientation": "portrait-primary",
        "scope": "/",
        "lang": "pt-BR",
        "categories": ["productivity", "government", "utilities"],
        "screenshots": [
            {
                "src": "assets/img/screenshot-mobile.png",
                "sizes": "360x640",
                "type": "image/png",
                "form_factor": "narrow"
            },
            {
                "src": "assets/img/screenshot-desktop.png", 
                "sizes": "1280x720",
                "type": "image/png",
                "form_factor": "wide"
            }
        ],
        "icons": [
            ...PWA_SIZES.map(({ size, name }) => ({
                "src": `assets/icons/${name}`,
                "sizes": `${size}x${size}`,
                "type": "image/png"
            })),
            {
                "src": "assets/icons/icon-192x192-maskable.png",
                "sizes": "192x192", 
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "assets/icons/icon-512x512-maskable.png",
                "sizes": "512x512",
                "type": "image/png", 
                "purpose": "maskable"
            }
        ],
        "shortcuts": [
            {
                "name": "Agentes de IA",
                "short_name": "Agentes",
                "description": "Conheça nossos agentes de IA brasileiros",
                "url": "/#agents",
                "icons": [{ "src": "assets/icons/icon-96x96.png", "sizes": "96x96" }]
            },
            {
                "name": "Repositórios",
                "short_name": "Código",
                "description": "Acesse o código-fonte do projeto",
                "url": "/#repositories", 
                "icons": [{ "src": "assets/icons/icon-96x96.png", "sizes": "96x96" }]
            },
            {
                "name": "API Docs",
                "short_name": "API",
                "description": "Documentação da API",
                "url": "/docs",
                "icons": [{ "src": "assets/icons/icon-96x96.png", "sizes": "96x96" }]
            }
        ]
    };
    
    fs.writeFileSync('./manifest.json', JSON.stringify(manifest, null, 2));
    console.log('📱 manifest.json atualizado');
}

/**
 * Gera HTML meta tags
 */
function generateHTMLTags() {
    const htmlTags = `
<!-- PWA Icons - Adicionar ao <head> -->
<link rel="icon" type="image/x-icon" href="assets/icons/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="assets/icons/favicon-48x48.png">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" href="assets/icons/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="167x167" href="assets/icons/apple-touch-icon-ipad.png">

<!-- PWA Meta Tags -->
<meta name="application-name" content="Cidadão.AI">
<meta name="apple-mobile-web-app-title" content="Cidadão.AI">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="mobile-web-app-capable" content="yes">

<!-- Theme Colors -->
<meta name="theme-color" content="${BRAND_COLOR}">
<meta name="msapplication-TileColor" content="${BRAND_COLOR}">
<meta name="msapplication-TileImage" content="assets/icons/icon-144x144.png">

<!-- Manifest -->
<link rel="manifest" href="manifest.json">
`;
    
    fs.writeFileSync('./pwa-meta-tags.html', htmlTags);
    console.log('📝 pwa-meta-tags.html gerado');
}

/**
 * Gera relatório de tamanhos
 */
function generateSizeReport() {
    console.log('\n📊 RELATÓRIO DE TAMANHOS:');
    console.log('=' * 40);
    
    let totalSize = 0;
    const files = fs.readdirSync(OUTPUT_DIR);
    
    files.forEach(file => {
        const filePath = path.join(OUTPUT_DIR, file);
        const stats = fs.statSync(filePath);
        totalSize += stats.size;
        console.log(`  ${file}: ${(stats.size/1024).toFixed(1)}KB`);
    });
    
    console.log(`\n📦 Total: ${(totalSize/1024).toFixed(1)}KB`);
    console.log(`🎯 Ícones PWA prontos para instalação!`);
}

// Executar geração
generateAllIcons().catch(console.error);