import type { CollectionEntry } from 'astro:content';

/**
 * @example
 * // returns { slugWithoutVersion: 'foo', version: 1 }
 * getSlugAndVersion('foo/v1');
 */
export const getSlugAndVersion = (slug: string) => {
    if (!slug.includes('/v')) {
        return { slugWithoutVersion: slug, version: undefined };
    }

    const [slugWithoutVersion, versionString] = slug.split('/v');

    const version = parseInt(versionString, 10);

    return { slugWithoutVersion, version };
};

/**
 *
 * @param posts - Array of posts. Use await getCollection('blog');
 * @returns {Record<string, number>} - Map of slugs to latest version
 */
export const buildSlugToLatestVersionMap = (posts: CollectionEntry<'blog'>[]) =>
    posts.reduce<Record<string, number>>((acc, { slug }) => {
        const { slugWithoutVersion, version } = getSlugAndVersion(slug);

        if (version === undefined) {
            return acc;
        }

        if (!acc[slugWithoutVersion] || acc[slugWithoutVersion] < version) {
            acc[slugWithoutVersion] = version;
        }

        return acc;
    }, {});
