import Image, { StaticImageData } from 'next/image'
import { ComponentProps } from 'react'

type Props = {
	src: string | StaticImageData
	imgSize: number
	alt: string
	className?: string
} & ComponentProps<typeof Image>

export default function ThemeSvg({
	src,
	imgSize,
	alt,
	className,
	...rest
}: Props) {
	const combinedClassName = `invert-theme ${className || ''}`.trim()

	return (
		<Image
			className={combinedClassName}
			width={imgSize}
			src={src}
			alt={alt}
			{...rest}
		/>
	)
}
