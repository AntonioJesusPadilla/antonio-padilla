export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  description: string;
  image: string;
  socialLinks: SocialLink[];
  about: string;
  skills: string[];
}

export const profile: ProfileData = {
  name: 'Antonio Jesús Padilla',
  title: 'Desarrollador Full Stack & Especialista en IA',
  description: 'Desarrollador full-stack especializado en interfaces modernas, automatización inteligente y soluciones de IA. Me apasiona crear aplicaciones completas que combinan frontend moderno con backends robustos y sistemas de IA.',
  image: '/antonio-avatar.svg',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/AntonioJesusPadilla', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/antoniojesuspadilla', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:antoniojesuspadilla.dev@proton.me', icon: 'email' }
  ],
  about: `Soy desarrollador full-stack especializado en crear soluciones completas que integran inteligencia artificial, automatización avanzada y experiencias de usuario excepcionales.

Mi experiencia abarca desde sistemas sanitarios inteligentes con análisis geoespacial (Copilot Salud Andalucía) hasta asistentes de investigación con interfaces de chat responsive (Jarvis) y pipelines robustos de procesamiento de documentos con OCR e IA (FactuAI). Combino tecnologías frontend modernas como Streamlit, Next.js y React con backends potentes en FastAPI y Python, además de herramientas de automatización como n8n y Docker.

Me especializo en sistemas RBAC completos, análisis geoespacial con mapas interactivos, asistentes de IA especializados con Groq Llama 3.3, y dashboards personalizados. Mi enfoque se centra en crear código limpio, mantenible y escalable que integre eficientemente servicios de IA con interfaces intuitivas para resolver problemas complejos del mundo real.`,
  skills: [
    'Streamlit',
    'Next.js',
    'Astro',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'FastAPI',
    'Python',
    'Node.js',
    'Groq IA',
    'OpenAI',
    'n8n',
    'Docker',
    'Power BI',
    'Folium',
    'Pandas',
    'JWT',
    'bcrypt',
    'OCR/Tesseract',
    'SQLite',
    'PostgreSQL',
    'Make',
    'Git',
    'IA/LLM'
  ]
};