export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: 'https://qasimnauman.tech/sitemap.xml',
  };
}
