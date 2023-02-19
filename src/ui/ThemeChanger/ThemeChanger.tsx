import cn from 'classnames'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import s from './ThemeChanger.module.scss'

export interface iThemeChanger {
	className?: string | string[]
}

export const ThemeChanger = ({ className }: iThemeChanger) => {
	const { theme, setTheme } = useTheme()
	const variants = {
		active: {},
		inactive: {},
	}

	return (
		<motion.div className={cn(s.wrap, className)}>
			<div className={s.light} onClick={() => setTheme('light')}></div>
			<div className={s.dark} onClick={() => setTheme('dark')}></div>
		</motion.div>
	)
}
