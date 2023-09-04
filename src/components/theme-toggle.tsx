'use client'

import ThemeSvg from '@/components/theme-svg'
import { Switch } from '@/components/ui/switch'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import moon from '/public/images/moon.svg'
import sun from '/public/images/sun.svg'

export default function ThemeToggle() {
	const t = useTranslations('imgAlt')
	const { setTheme } = useTheme()

	let isLightTheme = false
	const imgSize = 30

	useEffect(() => {
		isLightTheme = window.localStorage.getItem('theme') === 'light'
	}, [])

	const handleThemeToggle = () => {
		setTheme(!isLightTheme ? 'light' : 'dark')
	}

	return (
		<div className="flex items-center gap-2">
			<ThemeSvg alt={t('moon')} imgSize={imgSize} src={moon} />
			<Switch checked={isLightTheme} onCheckedChange={handleThemeToggle} />
			<ThemeSvg alt={t('sun')} imgSize={imgSize} src={sun} />
		</div>
	)
}
