import '@/app/styles/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'

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
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
