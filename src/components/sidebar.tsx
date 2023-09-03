'use client'

import { useTranslations } from 'next-intl'

export default function Sidebar() {
	const t = useTranslations('Index')

	return (
		<aside className="p-6">
			<h2>{t('sidebar')}</h2>
		</aside>
	)
}
