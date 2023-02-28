import Image from 'next/image'

import { TextMd } from '../../ui'
import { TextLg } from '../../ui'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap/dist/gsap'
import { useLayoutEffect, useRef } from 'react'

import s from './CreateSection.module.scss'

gsap.registerPlugin(ScrollTrigger)

export const CreateSection = () => {
  const createText =
    'Мы создаём сверхновое представление\nо комфорте и формируем во всех\nпроектах мультиформатную среду,\nв центре которой — человек и его\nпотребности.'

  const sectionRef = useRef(null)
  const refCards = useRef(null)

  useLayoutEffect(() => {
    // ScrollTrigger.create({
    //   trigger: sectionRef.current,
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   pin: refCards.current,
    //   markers: true,
    //   scrub: 2,
    //   //   pinSpacing: false,
    //   //   animation: animation,
    // })

    ScrollTrigger.refresh()
  }, [])

  return (
    <section className={s.section} data-scroll-section>
      <div className="container">
        <div className={s.wrap} ref={sectionRef}>
          <TextLg className={s.text} refs={refCards}>
            {createText}
          </TextLg>
          <div className={s.create__cards}>
            <div className={s.create__card}>
              <Image src={'/img/about/create/1.jpg'} fill alt="alt" />
            </div>
            <div className={s.create__card}>
              <Image src={'/img/about/create/2.jpg'} fill alt="alt" />
            </div>
            <div className={s.create__card}>
              <Image src={'/img/about/create/3.jpg'} fill alt="alt" />
            </div>
            <div className={s.create__card}>
              <Image src={'/img/about/create/4.jpg'} fill alt="alt" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
