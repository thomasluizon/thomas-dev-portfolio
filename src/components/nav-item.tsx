import hoverTheme from '@/utils/hover-theme'
import { useTranslations } from 'next-intl'
import Link from 'next-intl/link'
import { useTheme } from 'next-themes'

type Props = {
	section: string
}

export default function NavItem({ section }: Props) {
	const t = useTranslations('sidebar')
	const { theme } = useTheme()

	return (
		<li>
			<Link
				className={`inline-block p-2 text-sm rounded-sm hover:${
					hoverTheme[(theme as keyof typeof hoverTheme) || 'dark']
				} transition-colors duration-300 w-full`}
				href={section === 'home' ? '/' : section}
			>
				{t(`sections.${section}`)}
			</Link>
		</li>
	)
}
