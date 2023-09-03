'use client'

import NavItem from '@/components/nav-item'
import { useTranslations } from 'next-intl'

export default function Sidebar() {
	const t = useTranslations('sidebar')

	const sections = ['home', 'projects', 'contact']

	return (
		<aside className="h-full p-6 flex flex-col justify-between items-center gap-3">
			<h2 className="text-xl">{t('title')}</h2>
			<nav>
				<ul>
					{sections.map(section => (
						<NavItem section={section} />
					))}
				</ul>
			</nav>
			<div>socials</div>
		</aside>
	)
}
