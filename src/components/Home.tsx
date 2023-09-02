'use client'

import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'

export default function Home() {
	const t = useTranslations('Index')

	return (
		<>
			<h1 className="text-lg">{t('title')}</h1>
			<Link href="/test">Teste</Link>
		</>
	)
}
