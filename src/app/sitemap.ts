import type { MetadataRoute } from 'next'

const siteUrl = 'https://mkeverything.com'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
	]
}
