'use client'

import ThemeToggle from '@/components/theme-toggle'
import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations('index')

	return (
		<>
			<h1 className="text-lg">{t('title')}</h1>
			<ThemeToggle />
		</>
	)
}
