'use client'

import LanguageMenu from '@/components/language-menu'
import NavItem from '@/components/nav-item'
import Socials from '@/components/socials'
import ThemeToggle from '@/components/theme-toggle'
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
						<NavItem key={section} section={section} />
					))}
				</ul>
			</nav>
			<div className="flex flex-col gap-6 items-center">
				<Socials />
				<LanguageMenu />
				<ThemeToggle />
			</div>
		</aside>
	)
}
