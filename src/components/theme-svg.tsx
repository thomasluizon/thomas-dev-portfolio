import Image from 'next/image'

type Props = {
	isDarkTheme: boolean
	src: string
	imgSize: number
	alt: string
}

export default function ThemeSvg({ isDarkTheme, src, imgSize, alt }: Props) {
	return (
		<Image
			style={{ filter: isDarkTheme ? 'invert(100%)' : 'unset' }}
			width={imgSize}
			src={src}
			alt={alt}
		/>
	)
}
