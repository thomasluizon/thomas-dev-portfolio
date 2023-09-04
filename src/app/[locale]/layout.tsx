import '@/app/styles/globals.css'
import Sidebar from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'pt-br' }]
}

type Props = {
	children: React.ReactNode
	params: any
}

export default async function LocaleLayout({
	children,
	params: { locale },
}: Props) {
	let messages

	try {
		messages = (await import(`@/messages/${locale}.json`)).default
	} catch (error) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<NextIntlClientProvider locale={locale} messages={messages}>
						<div className="flex h-full w-full">
							<Sidebar />
							<main className="p-6">{children}</main>
						</div>
					</NextIntlClientProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
