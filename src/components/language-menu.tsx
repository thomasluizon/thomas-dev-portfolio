'use client'

import { usePathname, useRouter } from 'next-intl/client'

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'

import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'

export default function LanguageMenu() {
	const t = useTranslations('sidebar')

	const pathname = usePathname()
	const router = useRouter()

	function changeLanguage(locale: string) {
		router.replace(pathname, { locale })
	}

	const languages = [
		{
			name: 'English',
			locale: 'en',
		},
		{
			name: 'Português',
			locale: 'pt-br',
		},
	]

	return (
		<Popover>
			<PopoverTrigger
				className={`rounded-sm p-2 w-full transition-colors hover:bg-secondary`}
			>
				{t('language')}
			</PopoverTrigger>
			<PopoverContent className="max-w-[150px]">
				<ul className="flex flex-col gap-3 items-center">
					{languages.map(lang => (
						<li key={lang.locale}>
							<Button
								variant="ghost"
								onClick={() => changeLanguage(lang.locale)}
							>
								{lang.name}
							</Button>
						</li>
					))}
				</ul>
			</PopoverContent>
		</Popover>
	)
}
