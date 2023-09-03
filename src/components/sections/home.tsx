'use client'

import { useTranslations } from 'next-intl'

export default function Home() {
	const t = useTranslations('index')

	return (
		<>
			<h1 className="text-lg">{t('title')}</h1>
		</>
	)
}
