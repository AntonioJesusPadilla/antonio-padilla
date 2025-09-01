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
  name: 'Antonio Padilla',
  title: 'Desarrollador Full Stack',
  description: 'Apasionado desarrollador con experiencia en tecnologías modernas y soluciones innovadoras',
  image: '/avatar.svg',
  socialLinks: [
    { name: 'GitHub', url: 'https://github.com/AntonioJesusPadilla', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/antoniojesuspadilla', icon: 'linkedin' },
    { name: 'Email', url: 'mailto:antoniojesuspadilla@email.com', icon: 'email' }
  ],
  about: `Soy desarrollador full-stack especializado en crear soluciones completas que integran inteligencia artificial, automatización avanzada y experiencias de usuario excepcionales.

Mi experiencia abarca desde el desarrollo de asistentes de investigación inteligentes con interfaces de chat responsive (Jarvis) hasta pipelines robustos de procesamiento de documentos con OCR e IA (FactuAI). Combino tecnologías frontend modernas como Next.js y React con backends potentes en FastAPI y Python, además de herramientas de automatización como n8n y Docker.

Me especializo en proyectos que requieren procesamiento inteligente de datos, visualización avanzada con Power BI, y sistemas que combinan múltiples tecnologías para resolver problemas complejos del mundo real. Mi enfoque se centra en crear código limpio, mantenible y escalable que integre eficientemente servicios de IA con interfaces intuitivas.`,
  skills: [
    'Next.js',
    'Astro',
    'JavaScript',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'FastAPI',
    'Python',
    'Node.js',
    'n8n',
    'Docker',
    'Power BI',
    'OpenAI',
    'OCR/Tesseract',
    'SQLite',
    'Make',
    'PostgreSQL',
    'Git',
    'IA/LLM'
  ]
};