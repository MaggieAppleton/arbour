import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import config from 'arbour-config';

export async function GET(context) {
    const posts = await getCollection('blog');

    const publishRSSByDefault = !config.noRSS;

    const items = posts
        .filter((p) => {
            return publishRSSByDefault ? !p.data.noRSS : p.data.noRSS;
        })
        .map((post) => ({
            ...post.data,
            link: `/blog/${post.slug}/`,
        }));

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items,
    });
}
