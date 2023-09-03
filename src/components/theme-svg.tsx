import { useTheme } from 'next-themes'
import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type Props = {
	src: string | StaticImageData
	imgSize: number
	alt: string
} & ComponentProps<typeof Image>

export default function ThemeSvg({ src, imgSize, alt, ...rest }: Props) {
	const { theme } = useTheme()
	const isLightTheme = theme === 'light'

	return (
		<Image
			style={{ filter: !isLightTheme ? 'invert(100%)' : 'unset' }}
			width={imgSize}
			src={src}
			alt={alt}
			{...rest}
		/>
	)
}
