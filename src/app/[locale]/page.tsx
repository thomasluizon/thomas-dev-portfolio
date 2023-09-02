import Home from '@/components/Home'
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
