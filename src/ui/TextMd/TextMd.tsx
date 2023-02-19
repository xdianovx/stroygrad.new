import cn from 'classnames'

import s from './TextMd.module.scss'

export interface iTextLg {
	className?: string | string[]
	text: string | string[]
}

export const TextMd = ({ className, text }: iTextLg) => {
	return <p className={cn(s.text, className)}>{text}</p>
}
