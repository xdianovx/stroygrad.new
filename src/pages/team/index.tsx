import Head from 'next/head'

import { TeamScrollSection } from '@/screens/index'

import s from './team.module.scss'

import MainLayout from '@/layouts/MainLayout'

import { TeamCard } from '@/components/index'

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

  const teamSlideCards = [
    {
      id: 1,
      name: 'Камбаров\nСергей Геннадьевич',
      image: '/img/team_slider/1.png',
      position: 'Директор ООО СП "Крайлифт"',
    },
    {
      id: 2,
      name: 'Дроздов\nАнатолий Сергеевич',
      image: '/img/team_slider/2.png',
      position: 'Директор ООО СП "Крайлифт"',
    },
    {
      id: 3,
      name: 'Сафронов\nВладимир Владимирович',
      image: '/img/team_slider/3.png',
      position: 'Директор ООО СП "Крайлифт"',
    },
    {
      id: 4,
      name: 'Рудь\nНиколай Васильевич',
      image: '/img/team_slider/4.png',
      position: 'Директор ООО СП "Крайлифт"',
    },
    {
      id: 5,
      name: 'Пахомов\nРоман Александрович ',
      image: '/img/team_slider/5.png',
      position: 'Директор ООО СП "Крайлифт"',
    },
  ]
  return (
    <>
      <Head>
        <title>Стройград | Команда</title>
      </Head>
      <MainLayout>
        <section className={s.hero} data-scroll-section>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {title}
            </Title>
          </div>
        </section>

        <section className="mt-[110px] md:mt-16" data-scroll-section>
          <div className="container">
            <TextLg text={subTitle} />
          </div>
        </section>

        <section className="mt-[159px] xl:mt-[120px]" data-scroll-section>
          <div className="container">
            <div className="grid grid-cols-2 gap-[26px] sm:grid-cols-1 sm:gap-40">
              {teamData.map((item) => (
                <TeamCard data={item} key={item.id} />
              ))}
            </div>
          </div>
        </section>

        <TeamScrollSection
          data={teamSlideCards}
          className="mt-[692px] md:mt-[120px]"
        />

        <section className="mt-[600px]" data-scroll-section>
          <div className="container">
            <div className="grid grid-cols-2 sm:flex gap-8">
              <div>
                <p className="text-gray  sm:max-w-[80px] sm:leading-[120%] sm:text-sm ">
                  Работа для вас
                </p>
              </div>
              <div>
                <TextMd text={workText} />
                <p className="mt-20 sm:mt-5">(16+ свободных вакансий )</p>
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
