import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${TurboPascal.className} antialiased`}>{children}</body>
		</html>
	)
}

const TurboPascal = localFont({
	src: '../styles/fonts/TurboPascal/TurboPascalFont.ttf',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'mkeverything',
	description: 'mk means make',
}
