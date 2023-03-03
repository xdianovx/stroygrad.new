import Head from 'next/head'

import s from './team.module.scss'

import MainLayout from '@/layouts/MainLayout'

import { LinkCircle, TextLg, TextMd, Title } from '@/ui/index'

export default function Team() {
  const title = 'Сила\nкомпании'
  const subTitle =
    'Мы стремимся стать одним из\nкрупнейших строительно-\nинвестиционных холдингов\nфедерального и международного\nуровня.'
  const teamData = [
    {
      id: 1,
      name: 'Колосова\nОльга Ивановна',
      position: 'Генеральный директор\nООО "Стройград"',
      image: '/img/team/1.jpg',
    },
    {
      id: 2,
      name: 'Гукалов Андрей Александрович',
      position: 'Генеральный директор\nООО "Стройград"',
      image: '/img/team/2.jpg',
    },
  ]
  const workText = 'Свободные\nвакансии нашей\nкомпании '
  return (
    <>
      <Head>
        <title>Стройград | Команда</title>
      </Head>
      <MainLayout>
        <section className={s.hero}>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {title}
            </Title>
          </div>
        </section>

        <section className="mt-[110px]">
          <div className="container">
            <TextLg text={subTitle} />
          </div>
        </section>

        <section className="mt-[159px]">
          <div className="container">
            <div className="grid grid-cols-2 gap-[26px]">
              {/*
              {teamData.map((item) => (

          <TeamCard data={item} key={item.id} />
              ))}

          */}
            </div>
          </div>
        </section>

        <section className="mt-[692px]">
          <div className="container">
            <div className="flex items-end">
              <h2 className="text-[300px] leading-none">Команда</h2>
              <p className="ml-24 leading-none mb-[50px]">(32 человека)</p>
            </div>
          </div>
        </section>

        <section className="mt-[600px]">
          <div className="container">
            <div className="grid grid-cols-2">
              <div>
                <p className="text-grayDark">Работа для вас</p>
              </div>
              <div>
                <TextMd text={workText} />
                <p className="mt-20">(16+ свободных вакансий )</p>
                <LinkCircle
                  link="vacancy"
                  className="mt-[104px]"
                  text="Посмотреть вакансии"
                />
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}
