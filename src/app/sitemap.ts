import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mkeverything.com'
const alternateLanguages = {
	en: 'https://mkeverything.com',
	ru: 'https://mkeverything.ru',
	'x-default': 'https://mkeverything.com',
}

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: siteUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
			alternates: {
				languages: alternateLanguages,
			},
		},
	]
}
