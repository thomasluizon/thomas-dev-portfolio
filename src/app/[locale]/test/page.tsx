'use client'

import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'

export default function Page() {
	const t = useTranslations('Index')

	const pathname = usePathname()
	const router = useRouter()

	function changeLocale(locale: string) {
		router.replace(pathname, { locale })
	}

	return (
		<div>
			<h1 className="text-lg">{t('title')}</h1>
			<div>
				<button onClick={() => changeLocale('pt-br')}>portugues</button>
			</div>
			<div>
				<button onClick={() => changeLocale('en')}>english</button>
			</div>
		</div>
	)
}
