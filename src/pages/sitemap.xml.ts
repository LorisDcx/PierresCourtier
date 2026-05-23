import { getCollection } from 'astro:content';
import { servicePages } from '../data/servicePages';

const STATIC_PATHS = [
  { path: '/', lastmod: '2026-04-26' },
  { path: '/services/', lastmod: '2026-04-26' },
  { path: '/blog/', lastmod: '2026-04-26' },
  { path: '/comment-je-travaille/', lastmod: '2026-04-26' },
  { path: '/contact/', lastmod: '2026-04-26' },
  { path: '/honoraires/', lastmod: '2026-04-26' },
  { path: '/a-propos/', lastmod: '2026-04-26' },
  { path: '/mentions-legales/', lastmod: '2026-02-07' },
  { path: '/provenance-ethique/', lastmod: '2026-04-26' },
  { path: '/confidentialite/', lastmod: '2026-02-07' }
];

export const prerender = true;

export async function GET({ site }: { site?: URL }) {
  const baseUrl = (site ?? new URL('https://loris-lazulis.com')).toString();
  const posts = await getCollection('blog', (post) => !post.data.draft);

  const urls = [
    ...STATIC_PATHS.map((path) => ({
      loc: new URL(path.path, baseUrl).href,
      lastmod: new Date(`${path.lastmod}T00:00:00.000Z`).toISOString()
    })),
    ...servicePages.map((page) => ({
      loc: new URL(`/${page.slug}/`, baseUrl).href,
      lastmod: new Date(`${page.updatedDate}T00:00:00.000Z`).toISOString()
    })),
    ...posts.map((post) => ({
      loc: new URL(`/blog/${post.slug}/`, baseUrl).href,
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString()
    }))
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) => `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
