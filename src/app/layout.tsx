import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Portfolio - Thomas Luizon',
	description: 'Welcome to my portfolio!',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
