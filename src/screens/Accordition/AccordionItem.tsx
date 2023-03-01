import Image from 'next/image'

import ArrowSvg from './arrow.svg'
import cn from 'classnames'
import { Variants, motion } from 'framer-motion'
import { useState } from 'react'

import s from './Accordition.module.scss'

import { TextMd } from '@/ui/index'

export interface iAccorditionItem {
  title: string
  num: string
  link: string
  image: any
  data: any
}

export const AccordionItem = ({
  title,
  num,
  image,
  data,
}: iAccorditionItem): JSX.Element => {
  const [isHover, setIsHover] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const openHandler = () => {
    setIsOpen(!isOpen)
  }

  const variants: Variants = {
    open: {
      height: 'auto',
      opacity: 1,
    },

    closed: {
      height: 0,
      opacity: 0,
    },
  }

  return (
    <div
      className={cn(
        s.item,
        'border-t border-gray px-12 py-4 last-of-type:border-b relative  group  cursor-pointer',
        {
          ['bg-black']: isOpen,
        },
      )}
      onClick={openHandler}
    >
      <div className="absolute top-0 left-0 w-full h-0 bg-black group-hover:h-full transition-all duration-500 ease-[cubic-bezier(.77,.14,.11,.88)] z-[1]"></div>

      <div className="container relative z-[1]">
        <div className={cn(s.item__wrap, '')}>
          <div
            className={cn(s.item__head, 'grid-2 group-hover:text-white', {
              ['text-white']: isOpen,
            })}
          >
            <div>{num}</div>
            <div
              className={cn(
                'absolute left-[130px] w-0 h-0 top-1/2 -translate-y-1/2 rounded-full group-hover:w-[330px] group-hover:h-[330px] transition-all ease-[cubic-bezier(.77,.14,.11,.88)] ',
              )}
            >
              {!isOpen && (
                <Image src={image} fill alt={title} className="block" />
              )}
            </div>

            <div className="flex items-center">
              <h2
                className={cn(s.item__title, {
                  [s.active]: isOpen,
                })}
              >
                {title}
              </h2>
              <div
                className={cn(
                  s.circle,
                  'border flex items-center justify-center transition-all border-black group-hover:bg-white group-hover:w-12 group-hover:h-12',
                  {
                    ['text-white']: isOpen,
                  },
                )}
              >
                <ArrowSvg className={cn('opacity-0 group-hover:opacity-100')} />
              </div>
            </div>
          </div>
          <motion.div
            className={cn(s.item__content, 'pointer-events-none  text-white', {
              ['mt-10']: isOpen,
            })}
            variants={variants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
          >
            <div className="grid-2">
              <div className="relative w-[300px] h-[300px]">
                {isOpen && (
                  <Image src={image} fill alt={title} className="block " />
                )}
              </div>
              <div>
                <TextMd
                  text="Оформляйте полис ДМС от партнера «Альфа-страхование», и
                  получайте своевременную и качественную медицинскую помощь с
                  выгодой 30%. Сумму страхового взноса можно включить в
                ипотечный платеж и больше не беспокоиться о дополнительных
                  тратах."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
