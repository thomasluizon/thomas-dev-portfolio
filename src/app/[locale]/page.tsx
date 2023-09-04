import Home from '@/components/sections/home'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Portfolio - Thomas Luizon',
	description: 'Welcome to my portfolio!',
}

export default function Page() {
	return (
		<>
			<Home />
		</>
	)
}
