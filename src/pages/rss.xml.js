import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  const base = import.meta.env.BASE_URL;

  return rss({
    title: 'Valentín Liñeiro',
    description: 'Notas sobre software, sistemas, ideas y vida cotidiana.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `${base}posts/${post.id}/`
    }))
  });
}
