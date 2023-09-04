import ThemeSvg from '@/components/theme-svg'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import GitHub from '/public/images/github-icon.png'
import Linkedin from '/public/images/linkedin-icon.png'

export default function Socials() {
	const t = useTranslations('imgAlt')

	const socials = [
		{
			icon: GitHub,
			alt: t('github'),
			url: 'https://github.com/thomasluizon',
		},
		{
			icon: Linkedin,
			alt: t('linkedin'),
			url: 'https://www.linkedin.com/in/thomas-luizon/',
		},
	]

	return (
		<div className="flex items-center gap-3 justify-center">
			{socials.map(social => (
				<Link target="_blank" href={social.url} key={social.url}>
					<ThemeSvg
						imgSize={30}
						key={social.alt}
						src={social.icon}
						alt={social.alt}
						className="hover:scale-110 transition-transform"
					/>
				</Link>
			))}
		</div>
	)
}
