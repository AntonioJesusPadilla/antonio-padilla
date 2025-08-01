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
  name: 'Tu Nombre',
  title: 'Tu Profesión',
  description: 'Breve descripción sobre ti y tu expertise',
  image: '/profile.jpg',
  socialLinks: [
    { name: 'GitHub', url: '#', icon: 'mdi:github' },
    { name: 'LinkedIn', url: '#', icon: 'mdi:linkedin' },
    { name: 'Twitter', url: '#', icon: 'mdi:twitter' },
    { name: 'Email', url: 'mailto:tu@email.com', icon: 'mdi:email' }
  ],
  about: `Texto editable sobre tu experiencia profesional, formación y objetivos. 
  Puedes hablar sobre tu trayectoria, tecnologías que dominas y enfoque profesional.
  
  Ejemplo: Desarrollador full-stack con 5 años de experiencia...`,
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Astro',
    'Tailwind CSS'
  ]
};