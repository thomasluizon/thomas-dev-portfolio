'use client'

import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'

type Props = {
	section: string
}

export default function NavItem({ section }: Props) {
	const t = useTranslations('sidebar')

	return (
		<li>
			<Link
				className={`inline-block p-2 rounded-sm hover:bg-secondary transition-colors duration-300 w-full text-center`}
				href={section === 'home' ? '/' : section}
			>
				{t(`sections.${section}`)}
			</Link>
		</li>
	)
}
