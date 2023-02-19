import Link from 'next/link'

import cn from 'classnames'

import s from './LinkCircle.module.scss'

export interface iLinkCircle {
	link: string
	className?: string
	text: string
}
export const LinkCircle = ({ link, className, text }: iLinkCircle) => {
	return (
		<Link href={link} className={cn(s.link, className)}>
			<p className="before:bg-black">{text}</p>
			<div className={cn(s.circle, 'border-black border')}></div>
		</Link>
	)
}
