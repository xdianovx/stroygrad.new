import Link from 'next/link'

import ArrowSvg from './arrrow.svg'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { useState } from 'react'

import s from './LinkCircle.module.scss'

export interface iLinkCircle {
	link: string
	className?: string
	text: string
}
export const LinkCircle = ({ link, className, text }: iLinkCircle) => {
	const [isHover, setIsHover] = useState(false)
	const variants = {
		open: {
			width: 70,
			height: 70,
		},
		close: {
			width: 0,
			height: 0,
		},
	}

	const enterHoverHandler = () => {
		setIsHover(true)
	}

	const leacveHoverHandler = () => {
		setIsHover(false)
	}

	return (
		<Link href={link} className={cn(s.link, className)}>
			<p className="before:bg-black">{text}</p>
			<motion.div
				className="relative"
				onMouseEnter={enterHoverHandler}
				onMouseLeave={leacveHoverHandler}
			>
				<motion.div
					className={cn(s.circle, 'border-black border')}
				></motion.div>
				<motion.div
					variants={variants}
					animate={isHover ? 'open' : 'close'}
					initial="close"
					className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-full bg-black"
				>
					<ArrowSvg className="stroke-white" />
				</motion.div>
			</motion.div>
		</Link>
	)
}
