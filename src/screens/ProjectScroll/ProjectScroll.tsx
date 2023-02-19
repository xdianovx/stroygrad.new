import Image from 'next/image'
import Link from 'next/link'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import cn from 'classnames'

import s from './ProjectScroll.module.scss'

import { LinkCircle } from '@/ui/index'

export interface iProjectScroll {
	className?: string
}

export const ProjectScroll = ({ className }: iProjectScroll) => {
	const title = 'Наши\nпроекты'

	const projects = [
		{
			id: 1,
			title: 'Достояние',
			img: img1,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
		{
			id: 2,
			title: 'Достояние',
			img: img2,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
		{
			id: 3,
			title: 'Достояние',
			img: img3,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
		{
			id: 4,
			title: 'Достояние',
			img: img4,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
		{
			id: 5,
			title: 'Достояние',
			img: img5,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
		{
			id: 6,
			title: 'Достояние',
			img: img6,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
		{
			id: 7,
			title: 'Достояние',
			img: img7,
			link: '/projects',
			params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
		},
	]

	return (
		<section
			className={cn(s.section, className, 'mb-80')}
			data-scroll-section
			data-scroll-section-inview
			data-persistent
			id="fix"
		>
			<div className="container">
				<div
					className="flex justify-between items-end h-screen pb-60"
					data-scroll
					data-scroll-sticky
					data-scroll-target="#fix"
				>
					<h2 className={s.title}>{title}</h2>
					<LinkCircle link="/projects" text="Все проекты" />
				</div>

				<div className={s.cards}>
					{projects.map((item) => (
						<Link href={item.link} className={s.card} key={item.id}>
							<div className={s.card__image}>
								<Image src={item.img} fill alt={item.title} />
							</div>
							<p className={s.card__title}>{item.title}</p>
							<div className="flex mt-6 gap-6">
								{item.params.map((item) => (
									<>
										<p>{item}</p>
										<div className="last-of-type:hidden">/</div>
									</>
								))}
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}
