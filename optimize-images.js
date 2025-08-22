/**
 * Image Optimization Script - Cidadão.AI
 * 
 * Otimiza todas as imagens dos agentes para WebP e tamanhos otimizados
 * Reduz significativamente o bundle size e melhora performance
 */

const fs = require('fs');
const path = require('path');

// Verificar se sharp está disponível
let sharp;
try {
    sharp = require('sharp');
    console.log('✅ Sharp disponível para otimização');
} catch (error) {
    console.log('⚠️ Sharp não encontrado. Instalando...');
    const { execSync } = require('child_process');
    try {
        execSync('npm install sharp', { stdio: 'inherit' });
        sharp = require('sharp');
        console.log('✅ Sharp instalado com sucesso');
    } catch (installError) {
        console.error('❌ Erro ao instalar Sharp:', installError.message);
        console.log('📝 Execute manualmente: npm install sharp');
        process.exit(1);
    }
}

const INPUT_DIR = './assets/agents';
const OUTPUT_DIR = './assets/agents-optimized';
const TARGET_SIZE = 96; // pixels
const QUALITY = 85;

// Criar diretório de saída
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
    const nameWithoutExt = path.parse(filename).name;
    const webpPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.webp`);
    const pngPath = path.join(OUTPUT_DIR, `${nameWithoutExt}.png`);
    
    try {
        console.log(`🔄 Processando: ${filename}`);
        
        // Obter info da imagem original
        const originalStats = fs.statSync(inputPath);
        const originalSize = originalStats.size;
        
        // Gerar WebP otimizado (formato moderno)
        await sharp(inputPath)
            .resize(TARGET_SIZE, TARGET_SIZE, {
                fit: 'cover',
                position: 'center'
            })
            .webp({ 
                quality: QUALITY,
                effort: 6 // Máxima compressão
            })
            .toFile(webpPath);
        
        // Gerar PNG otimizado (fallback)
        await sharp(inputPath)
            .resize(TARGET_SIZE, TARGET_SIZE, {
                fit: 'cover',
                position: 'center'
            })
            .png({ 
                quality: QUALITY,
                compressionLevel: 9,
                progressive: true
            })
            .toFile(pngPath);
        
        // Calcular economia
        const webpStats = fs.statSync(webpPath);
        const pngStats = fs.statSync(pngPath);
        const webpSize = webpStats.size;
        const pngSize = pngStats.size;
        
        const webpSavings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
        const pngSavings = ((originalSize - pngSize) / originalSize * 100).toFixed(1);
        
        console.log(`  📊 Original: ${(originalSize/1024).toFixed(1)}KB`);
        console.log(`  🚀 WebP: ${(webpSize/1024).toFixed(1)}KB (-${webpSavings}%)`);
        console.log(`  📱 PNG: ${(pngSize/1024).toFixed(1)}KB (-${pngSavings}%)`);
        
        return {
            original: originalSize,
            webp: webpSize,
            png: pngSize,
            filename: nameWithoutExt
        };
        
    } catch (error) {
        console.error(`❌ Erro ao processar ${filename}:`, error.message);
        return null;
    }
}

async function optimizeAllImages() {
    console.log('🚀 Iniciando otimização de imagens...\n');
    
    const files = fs.readdirSync(INPUT_DIR)
        .filter(file => /\.(png|jpg|jpeg)$/i.test(file));
    
    if (files.length === 0) {
        console.log('⚠️ Nenhuma imagem encontrada em', INPUT_DIR);
        return;
    }
    
    console.log(`📂 Encontradas ${files.length} imagens para otimizar`);
    console.log(`🎯 Redimensionando para ${TARGET_SIZE}x${TARGET_SIZE}px`);
    console.log(`🏆 Qualidade: ${QUALITY}%\n`);
    
    const results = [];
    let totalOriginal = 0;
    let totalWebP = 0;
    let totalPNG = 0;
    
    for (const file of files) {
        const inputPath = path.join(INPUT_DIR, file);
        const result = await optimizeImage(inputPath, file);
        
        if (result) {
            results.push(result);
            totalOriginal += result.original;
            totalWebP += result.webp;
            totalPNG += result.png;
        }
        
        console.log(); // Linha vazia
    }
    
    // Relatório final
    console.log('📊 RELATÓRIO FINAL DE OTIMIZAÇÃO');
    console.log('='.repeat(50));
    console.log(`🔍 Imagens processadas: ${results.length}`);
    console.log(`📦 Tamanho original total: ${(totalOriginal/1024).toFixed(1)}KB`);
    console.log(`🚀 Tamanho WebP total: ${(totalWebP/1024).toFixed(1)}KB`);
    console.log(`📱 Tamanho PNG total: ${(totalPNG/1024).toFixed(1)}KB`);
    
    const webpSavings = ((totalOriginal - totalWebP) / totalOriginal * 100).toFixed(1);
    const pngSavings = ((totalOriginal - totalPNG) / totalOriginal * 100).toFixed(1);
    
    console.log(`\n💰 ECONOMIA:`);
    console.log(`  WebP: -${webpSavings}% (${(totalOriginal - totalWebP)/1024}KB economizados)`);
    console.log(`  PNG: -${pngSavings}% (${(totalOriginal - totalPNG)/1024}KB economizados)`);
    
    console.log(`\n✅ Otimização concluída!`);
    console.log(`📁 Imagens salvas em: ${OUTPUT_DIR}`);
    
    // Gerar código CSS para usar as imagens otimizadas
    generateOptimizedCSS(results);
}

function generateOptimizedCSS(results) {
    const cssRules = results.map(result => {
        return `
/* ${result.filename} - Otimizado */
.agent-avatar[src*="${result.filename}"],
.carousel-avatar[src*="${result.filename}"] {
    background-image: 
        image-set(
            url("./agents-optimized/${result.filename}.webp") 1x,
            url("./agents-optimized/${result.filename}.png") 1x
        );
    background-size: cover;
    background-position: center;
    width: 60px;
    height: 60px;
}

/* Fallback para navegadores antigos */
.no-webp .agent-avatar[src*="${result.filename}"],
.no-webp .carousel-avatar[src*="${result.filename}"] {
    background-image: url("./agents-optimized/${result.filename}.png");
}`;
    }).join('\n');
    
    const fullCSS = `/* 
 * Imagens Otimizadas - Cidadão.AI Agents
 * Gerado automaticamente pelo script de otimização
 * 
 * Performance gains:
 * - WebP format para navegadores modernos
 * - PNG otimizado para fallback
 * - Tamanho padronizado: 96x96px
 * - Lazy loading ready
 */

${cssRules}

/* WebP Detection Script - Adicionar ao <head> */
/*
<script>
(function() {
    var webp = new Image();
    webp.onload = webp.onerror = function() {
        document.documentElement.classList.add(webp.height == 2 ? 'webp' : 'no-webp');
    };
    webp.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
})();
</script>
*/
`;
    
    fs.writeFileSync('./assets/css/optimized-images.css', fullCSS);
    console.log('📝 CSS gerado: assets/css/optimized-images.css');
}

// Executar otimização
optimizeAllImages().catch(console.error);