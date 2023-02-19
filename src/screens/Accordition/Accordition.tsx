import { AccordionItem } from './AccordionItem'
import cn from 'classnames'

import s from './Accordition.module.scss'

import { TextMd } from '@/ui/index'

export interface iAccordition {
	className?: string
	title: string
	text: string
	subtitle?: string
}

export const Accordition = ({
	className,
	text,
	title,
	subtitle,
}: iAccordition) => {
	const data = [
		{
			id: 1,
			title: 'Уровень  ',
			num: '01',
			link: '/',
			data: {
				text: 'Оформляйте полис ДМС от партнера «Альфа-страхование», и получайте своевременную и качественную медицинскую помощь с выгодой 30%. Сумму страхового взноса можно включить в ипотечный платеж и больше не беспокоиться о дополнительных тратах. ',
				features: [
					{ id: 1, num: '01', text: 'Надежные партнеры' },
					{ id: 2, num: '02', text: 'Широкий выбор услуг' },
					{ id: 3, num: '03', text: 'Стоимость\nвключена в ипотеку' },
					{ id: 4, num: '04', text: 'Широкая\nсеть клиник' },
				],
			},
		},

		{
			id: 2,
			title: 'Оценка',
			num: '02',
			link: '/',
			data: {
				text: 'Оформляйте полис ДМС от партнера «Альфа-страхование», и получайте своевременную и качественную медицинскую помощь с выгодой 30%. Сумму страхового взноса можно включить в ипотечный платеж и больше не беспокоиться о дополнительных тратах. ',
				features: [
					{ id: 1, num: '01', text: 'Надежные партнеры' },
					{ id: 2, num: '02', text: 'Широкий выбор услуг' },
					{ id: 3, num: '03', text: 'Стоимость\nвключена в ипотеку' },
					{ id: 4, num: '04', text: 'Широкая\nсеть клиник' },
				],
			},
		},

		{
			id: 3,
			title: 'Страхование ',
			num: '03',
			link: '/',
			data: {
				text: 'Оформляйте полис ДМС от партнера «Альфа-страхование», и получайте своевременную и качественную медицинскую помощь с выгодой 30%. Сумму страхового взноса можно включить в ипотечный платеж и больше не беспокоиться о дополнительных тратах. ',
				features: [
					{ id: 1, num: '01', text: 'Надежные партнеры' },
					{ id: 2, num: '02', text: 'Широкий выбор услуг' },
					{ id: 3, num: '03', text: 'Стоимость\nвключена в ипотеку' },
					{ id: 4, num: '04', text: 'Широкая\nсеть клиник' },
				],
			},
		},
	]

	return (
		<section className={cn(s.section, className)} data-scroll-section>
			<div className={s.top}>
				<div className="container">
					<div className={cn(s.wrap, 'grid-2')}>
						<h2 className="text-gray">{title}</h2>
						<div>
							<TextMd text={text} />
							{subtitle && <p className="mt-20">{subtitle}</p>}
						</div>
					</div>
				</div>
			</div>

			<div className={s.bottom}>
				{data.map((item) => (
					<AccordionItem
						title={item.title}
						num={item.num}
						link={item.link}
						data={item.data}
					/>
				))}
			</div>
		</section>
	)
}
