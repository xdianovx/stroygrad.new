import cn from 'classnames'

import s from './TextBlock.module.scss'

import { TextLg } from '@/ui/index'

export interface iTextBlock {
	className?: string | string[]
	text: string
	title: string
}

export const TextBlock = ({ text, title, className }: iTextBlock) => {
	return (
		<section className={cn(s.section, className)} data-scroll-section>
			<div className="container">
				<div className="flex flex-col">
					<TextLg text={title} />
					<p className="max-w-[340px] mx-auto mt-12">{text}</p>
				</div>
			</div>
		</section>
	)
}
