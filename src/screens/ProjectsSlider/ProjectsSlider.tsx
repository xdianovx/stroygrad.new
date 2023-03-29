import Image from 'next/image'
import Link from 'next/link'

import { ProjectSlide } from './ProjectSlide'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'
import img7 from './img/7.jpg'
import cn from 'classnames'
import { useRef, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderArrowNext, SliderArrowPrev } from '@/ui/index'

export interface iProjectSlider {
  className?: string
}

export const ProjectsSlider = ({ className }: iProjectSlider) => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'Достояние',
      img: img1,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
    {
      id: 2,
      title: 'Достояние',
      img: img2,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
    {
      id: 3,
      title: 'Достояние',
      img: img3,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
    {
      id: 4,
      title: 'Достояние',
      img: img4,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
    {
      id: 5,
      title: 'Достояние',
      img: img5,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
    {
      id: 6,
      title: 'Достояние',
      img: img6,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
    {
      id: 7,
      title: 'Достояние',
      img: img7,
      link: '/projects/projectname',
      params: ['Ростов-на-Дону', 'Построен в 2021 г.', 'от 43,3 млн. рублей'],
    },
  ]
  return (
    <section className={cn(className)} data-scroll-section>
      <div className="container">
        <div className="flex items-end">
          <h2 className="text-[300px] leading-[245px] md:text-2xl md:leading-none">
            Наши
            <br />
            проекты
          </h2>

          <div className="flex gap-2 ml-auto mt-5 mb-2 xl:mt-3">
            <SliderArrowPrev refEl={navigationPrevRef} />
            <SliderArrowNext refEl={navigationNextRef} />
          </div>
        </div>
      </div>

      <div className="mt-[105px]">
        <hr className="border-grayLight" />
        <div className="container">
          <div className="my-16">
            <Swiper
              className="w-full overflow-visible"
              pagination={{
                type: 'fraction',
                el: '.swiper-paginatin',
                clickable: true,
                renderBullet: (index, className) => {
                  return (
                    '<span class="' + className + '">' + (index + 1) + '</span>'
                  )
                },
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current
                swiper.params.navigation.nextEl = navigationNextRef.current
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onSwiper={(swiper) => {
                // Delay execution for the refs to be defined
                setTimeout(() => {
                  // Override prevEl & nextEl now that refs are defined
                  swiper.params.navigation.prevEl = navigationPrevRef.current
                  swiper.params.navigation.nextEl = navigationNextRef.current

                  // Re-init navigation
                  swiper.navigation.destroy()
                  swiper.navigation.init()
                  swiper.navigation.update()
                })
              }}
              speed={500}
              loop={true}
              spaceBetween={32}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {},
                1520: {},
                1681: {
                  slidesPerView: 'auto',
                },
              }}
            >
              {projects.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="max-w-[1260px] w-full xl:max-w-none"
                >
                  <ProjectSlide data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <hr className="border-grayLight" />
    </section>
  )
}
