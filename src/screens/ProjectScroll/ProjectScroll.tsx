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
      className={cn(s.section, className, 'mb-80 sm:mb-20')}
      data-scroll-section
      data-scroll-section-inview
      data-persistent
      id="fix"
    >
      <div className="container">
        <div
          className="flex justify-between items-end h-screen pb-60 pointer-events-none relative z-[0]"
          data-scroll
          data-scroll-sticky
          data-scroll-target="#fix"
        >
          <h2 className={cn(s.title, '')}>{title}</h2>

          <div className="flex items-end md:items-center md:hidden">
            <span className="leading-none text-[60px] font-light md:text-[18px]">
              35+
            </span>
            <p className="leading-none mb-2 md:mb-0">проектов</p>
          </div>
        </div>

        <div className={s.cards}>
          {projects.map((item) => (
            <Link href={item.link} className={s.card} key={item.id}>
              <div className={s.card__image}>
                <Image src={item.img} fill alt={item.title} />
              </div>
              <div
                className={cn(
                  s.card__info,
                  'bg-[#000]/[.5] h-full flex  justify-center flex-col text-white gap-[84px] pl-[100px]',
                )}
              >
                <p className={s.card__title}>{item.title}</p>
                <div className="flex mt-6 gap-8">
                  {item.params.map((item, idx) => (
                    <p key={idx} className="text-xl">{item}</p>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          <LinkCircle
            link="/projects"
            text="Все проекты"
            className="pointer-events-auto ml-auto"
          />
        </div>
      </div>
    </section>
  )
}
