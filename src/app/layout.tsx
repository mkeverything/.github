import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mkeverything.com'
const siteLanguage = siteUrl.endsWith('.ru') ? 'ru' : 'en'
const siteName = 'mkeverything'
const title = siteLanguage === 'ru'
	? 'mkeverything — веб-приложения, боты, лендинги и многое другое'
	: 'mkeverything — custom web apps, bots, landing pages and many more'
const description = siteLanguage === 'ru'
	? 'инди-команда разработчиков: делаем веб-приложения, телеграм-ботов, лендинги, внутренние инструменты и софт для бизнеса'
	: 'indie software development team building custom web apps, telegram bots, landing pages, internal tools and software for businesses'
const alternateLanguages = {
	en: 'https://mkeverything.com',
	ru: 'https://mkeverything.ru',
}

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: siteName,
	url: siteUrl,
	email: 'mkevrthng@gmail.com',
	description,
	areaServed: 'Worldwide',
	availableLanguage: ['en', 'ru'],
	inLanguage: siteLanguage,
	sameAs: [
		'https://github.com/mkeverything',
		'https://t.me/mkevrthng',
	],
	knowsAbout: [
		'web applications',
		'telegram bots',
		'landing pages',
		'internal tools',
		'custom software development',
	],
	makesOffer: [
		{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom web application development' } },
		{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Telegram bot development' } },
		{ '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing page development' } },
	],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang={siteLanguage}>
			<body>
				{children}
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</body>
		</html>
	)
}

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: title,
		template: `%s — ${siteName}`,
	},
	description,
	keywords: [
		'mkevrthng',
		'mkeverything',
		'make everything',
		'indie developers',
		'software development team',
		'custom software development',
		'web application development',
		'telegram bot development',
		'landing page development',
		'internal tools',
	],
	applicationName: siteName,
	creator: siteName,
	publisher: siteName,
	category: 'software development',
	alternates: {
		canonical: siteUrl,
		languages: {
			en: alternateLanguages.en,
			ru: alternateLanguages.ru,
			'x-default': alternateLanguages.en,
		},
	},
	openGraph: {
		type: 'website',
		url: siteUrl,
		siteName,
		title,
		description,
		locale: siteLanguage === 'ru' ? 'ru_RU' : 'en_US',
		alternateLocale: [siteLanguage === 'ru' ? 'en_US' : 'ru_RU'],
	},
	twitter: {
		card: 'summary',
		title,
		description,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
	},
}

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#ffffff' },
		{ media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
	],
}
