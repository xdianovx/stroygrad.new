import Link from 'next/link'

import LogoSvg from './Logo.svg'

import s from './Logo.module.scss'

export const Logo = () => {
	return (
		<Link href="/">
			<LogoSvg />
		</Link>
	)
}
