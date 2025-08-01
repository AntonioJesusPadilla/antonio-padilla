# Portfolio Profesional con Astro

## Características
✅ Diseño responsive  
✅ Modo oscuro/claro  
✅ Integración con React  
✅ Optimización de imágenes  
✅ SEO básico  
✅ Fast Refresh  

## Instalación
```bash
npm install
```

## Desarrollo
```bash
npm run dev
```

## Despliegue

### Vercel
1. Conectar tu repositorio GitHub/GitLab
2. Configurar como proyecto Astro
3. El despliegue será automático

### Netlify
1. Añadir `_redirects` en public
2. Configurar build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
1. Configurar `astro.config.mjs` con `site: 'https://username.github.io'`
2. Añadir deploy script en package.json

## Internacionalización (i18n)
1. Crear archivos JSON por idioma en `src/i18n/`
2. Usar componente `<LanguageSwitcher />`
3. Implementar rutas con prefijos (/es, /en)

## Conexión con Notion
1. Crear API key en Notion
2. Instalar `@notionhq/client`
3. Crear servicio en `src/services/notion.js`
4. Usar en páginas con `getStaticProps`