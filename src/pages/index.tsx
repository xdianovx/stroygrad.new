import Head from 'next/head'

import { Footer } from '../components'
import {
	Accordition,
	ComplexSolutions,
	IndexHero,
	NumSection,
	ProjectScroll,
	ScrollImage,
} from '../screens'
import { TextBlock } from '@/screens/TextBlock/TextBlock'

import { Header } from '@/components/Header/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>Стройград | Главная</title>
				<meta name="description" content="Стройград" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<IndexHero />
			<ScrollImage />
			<TextBlock
				title="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального и международного уровня."
				text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
				className="mt-[200px]"
			/>
			<ProjectScroll className="mt-[380px]" />

			<Accordition
				className="mt-[80px]"
				title={'Сервисы для\nсчастливой жизни'}
				text="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального уровня."
				subtitle={
					'Все это время «Стройград» стремительно\nразвивался, выходил на новые рынки.'
				}
			/>

			{/* <ComplexSolutions
				title={'Комплексные\nрешения'}
				subtitle={
					'Кроме комплексных решений, в качестве\nотдельных задач, мы можем выполнить\nкачественно и в срок следующие виды работ'
				}
				className="mt-[708px]"
			/> */}

			<TextBlock
				title="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального и международного уровня."
				text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
				className="mt-[500px]"
			/>

			<NumSection className="mt-[228px]" />
			<Footer />
		</>
	)
}
