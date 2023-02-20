import { useState } from 'react'

import s from './Header.module.scss'

import { Navigation } from '@/components/index'

import { Burger, Logo, ThemeChanger } from '@/ui/index'

export const Header = () => {
	const [isNavOpen, setIsNavOpen] = useState(false)
	const body = document.querySelector('body')
	if (isNavOpen) {
		body.style.overflow = 'hidden'
	}

	return (
		<header className={s.header} data-scroll-sectione>
			<Navigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
			<div className="container">
				<div className={s.wrap}>
					<Logo />
					<ThemeChanger className={s.theme__changer} />
					<Burger
						className={s.burger}
						isOpen={isNavOpen}
						setIsOpen={setIsNavOpen}
					/>
				</div>
			</div>
		</header>
	)
}
