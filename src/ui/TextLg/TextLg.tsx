import cn from 'classnames'

import s from './TextLg.module.scss'

export interface iTextLg {
	className?: string | string[]
	text: string | string[]
}

export const TextLg = ({ className, text }: iTextLg) => {
	return <p className={cn(s.text, className)}>{text}</p>
}
