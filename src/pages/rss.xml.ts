import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  
  return rss({
    title: 'Loris Lazulis - Blog',
    description: 'Articles et guides sur l\'achat de pierres précieuses',
    site: context.site!,
    items: posts
      .filter(post => !post.data.draft)
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>fr-fr</language>`,
  });
}
