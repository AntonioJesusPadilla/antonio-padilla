# Script para configurar el entorno virtual de Node.js
Write-Host "🚀 Configurando entorno virtual para Portfolio Antonio Padilla..." -ForegroundColor Green

# Verificar si Node.js está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js encontrado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js no está instalado. Por favor instala Node.js 18+ desde https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Verificar si npm está instalado
try {
    $npmVersion = npm --version
    Write-Host "✅ npm encontrado: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npm no está instalado." -ForegroundColor Red
    exit 1
}

# Limpiar node_modules si existe
if (Test-Path "node_modules") {
    Write-Host "🧹 Limpiando node_modules existente..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "node_modules"
}

# Limpiar archivos de lock si existen
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json"
}
if (Test-Path "yarn.lock") {
    Remove-Item "yarn.lock"
}
if (Test-Path "pnpm-lock.yaml") {
    Remove-Item "pnpm-lock.yaml"
}

# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Blue
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencias instaladas correctamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Entorno configurado exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Para ejecutar el proyecto:" -ForegroundColor Cyan
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Para construir el proyecto:" -ForegroundColor Cyan
    Write-Host "  npm run build" -ForegroundColor White
} else {
    Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
    exit 1
}
