import cn from 'classnames'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

import s from './ComplexSolutions.module.scss'

gsap.registerPlugin(ScrollTrigger)

export interface iComplexSolutions {
  className?: string
  title: string
  subtitle?: string
}

export const ComplexSolutions = ({
  className,
  title,
  subtitle,
}: iComplexSolutions) => {
  const { scroll } = useLocomotiveScroll()
  const ref = useRef(null)
  const text = useRef(null)
  const menuRefs = useRef([])
  menuRefs.current = []

  const addToRefs = (el) => {
    if (el && !menuRefs.current.includes(el)) {
      menuRefs.current.push(el)
    }
  }

  useEffect(() => {
    if (scroll) {
      const element = scroll?.el

      scroll.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, { duration: 0, disableLerp: true })
            : scroll.scroll.instance.scroll.y
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
        pinType: element.style.transform ? 'transform' : 'fixed',
      })
      ScrollTrigger.addEventListener('refresh', () => scroll?.update())

      ScrollTrigger.refresh()
    }

    const ctx = gsap.context((self) => {
      const boxes = self.selector('.asd')
      boxes.forEach((box, i) => {
        gsap
          .timeline()
          .from(box, {
            xPercent: 80,
            scrollTrigger: {
              trigger: box,
              start: 'top center',
              scroller: scroll?.el,
              end: 'top 10%',
              scrub: true,
              // markers: true,
            },
          })
          .to(box, {
            xPercent: -200 * i,
          })
      })
    }, ref)
    return () => ctx.revert()
  }, [scroll])

  return (
    <section
      className={cn(s.section, className)}
      ref={ref}
      data-scroll-section
    // data-persistent
    // id="fix2"
    >
      <div
        className={s.top}
      // data-scroll
      // data-scroll-sticky
      // data-scroll-target="#fix2"
      >
        <div className="container">
          <div className="grid-2 items-end">
            <h2 className={cn(s.title)}>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        </div>
      </div>
      {/* <div className="container"> */}
      <div className="container">
        <div className={cn(s.drawers, '')}>
          <div className={cn(s.drawer, 'border  border-grayBorder')} ref={text}>
            <div className={cn(s.drawer__head)}>
              <p>/01</p>
              <p className={s.drawer__title}>Уютные квартиры со скидкой</p>
            </div>
            <div className={s.drawer__content}></div>
          </div>

          <div
            className={cn(s.drawer, 'border asd border-grayBorder')}
            ref={addToRefs}
          >
            <div className={cn(s.drawer__head)}>
              <p>/02</p>
              <p className={s.drawer__title}>Уютные квартиры со скидкой</p>
            </div>
            <div className={s.drawer__content}></div>
          </div>

          <div
            className={cn(s.drawer, 'border asd border-grayBorder')}
            ref={addToRefs}
          >
            <div className={cn(s.drawer__head)}>
              <p>/02</p>
              <p className={s.drawer__title}>Уютные квартиры со скидкой</p>
            </div>
            <div className={s.drawer__content}></div>
          </div>
          {/*
					<div
						className={cn(s.drawer, 'border border-grayBorder')}
						ref={addToRefs}
					>
						<div className={cn(s.drawer__head)}>
							<p>/03</p>
							<p className={s.drawer__title}>Уютные квартиры со скидкой</p>
						</div>
						<div className={s.drawer__content}></div>
					</div>
					<div
						className={cn(s.drawer, 'border  border-grayBorder')}
						ref={addToRefs}
					>
						<div className={cn(s.drawer__head)}>
							<p>/04</p>
							<p className={s.drawer__title}>Уютные квартиры со скидкой</p>
						</div>
						<div className={s.drawer__content}></div>
					</div> */}
        </div>
      </div>
    </section>
  )
}
