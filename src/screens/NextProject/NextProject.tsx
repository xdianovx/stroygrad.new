import Image from 'next/image'
import Link from 'next/link'

import ImgSrc1 from './img.png'
import cn from 'classnames'

import { Title } from '@/ui/index'

export interface iNextProject {
  className?: string
}

export const NextProject = ({ className }: iNextProject) => {
  return (
    <section
      className={cn('relative overflow-hidden', className)}
      data-scroll-section
    >
      <div className="container">
        <span className="block text-gray text-center">Следующий проект</span>

        <h2 className="text-center mt-6 text-[220px] leading-none">
          Берег солнца
        </h2>

        <div className="flex gap-8 justify-center mt-8">
          <p>Ростов-на-Дону</p>
          <div>/</div>
          <p>Постороен в 2021г.</p>
          <div>/</div>
          <p>от 43,3 млн. рублей</p>
        </div>

        <div className="flex justify-center mt-16">
          <Image src={ImgSrc1} />
        </div>
      </div>

      <div className="absolute bg-white left-0 -bottom-1/2 h-full w-full z-20 border-t border-grayBorder">
        <Link
          href="/projects"
          className="underline underline-offset-2 text-center block"
        >
          Все проекты
        </Link>
      </div>
    </section>
  )
}
