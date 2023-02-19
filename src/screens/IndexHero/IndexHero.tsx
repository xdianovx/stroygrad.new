import s from './IndexHero.module.scss'

import { Title } from '@/ui/index'

export const IndexHero = () => {
	const title = 'Мы строим\nсчастливое\nбудущее'
	return (
		<section className={s.section} data-scroll-section>
			<div className="container">
				<div className={s.wrap}>
					{/*// @ts-ignore */}
					<Title tag="h1">{title}</Title>
				</div>
			</div>
		</section>
	)
}
