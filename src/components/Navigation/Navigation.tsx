import Link from 'next/link'

import cn from 'classnames'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import s from './Navigation.module.scss'

export interface iNavigation {
  className?: string | string[]
  isOpen: boolean
  setIsOpen: any
}

export const Navigation = ({ className, isOpen, setIsOpen }: iNavigation) => {
  const links = [
    { id: 1, title: 'О нас ', link: 'about', num: '01' },
    { id: 2, title: 'Новости', link: 'news', num: '02' },
    { id: 3, title: 'Проекты ', link: 'projects', num: '03' },
    { id: 4, title: 'Контакты ', link: 'contacts', num: '04' },
    { id: 5, title: 'Вакансии', link: 'vacancy', num: '05' },
  ]
  const variants = {
    open: {
      x: 0,
    },
    closed: {
      x: '-100%',
    },
  }

  return (
    <motion.nav
      className={cn(s.nav, className, 'dark:bg-black dark:text-white')}
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      transition={{ default: { ease: 'linear' }, stiffness: 100 }}
    >
      <div className={s.wrap}>
        {links.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={cn(s.card, s.card__link)}
          >
            <p className={s.card__title}>{item.title}</p>
            <p className={s.card__num}>/{item.num}</p>
          </Link>
        ))}
        <div className={s.card}></div>
      </div>
    </motion.nav>
  )
}
