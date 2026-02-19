// Site configuration
export const SITE = {
  title: 'Tanas Fuarcılık',
  description: 'Projelerinizi sahada güçlü bir deneyime dönüştürüyoruz.',
  url: 'https://www.tanasfuar.com/',
  author: 'Tanas Fuarcılık',
} as const;

export const NAVIGATION = [
  { name: 'Ana Sayfa', href: '/' },
  { name: 'Hizmetlerimiz', href: '/capabilities' },
  { name: 'Fuar Stantlarımız', href: '/use-cases' },
  { name: 'Teklif Al', href: '/rfq' },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/tanasfuarcilik/',
  linkedin: 'https://www.linkedin.com/in/tanas-fuarc%C4%B1l%C4%B1k-16290a4a',
  facebook: 'https://www.facebook.com/tanasfuarcilik/',
} as const;

