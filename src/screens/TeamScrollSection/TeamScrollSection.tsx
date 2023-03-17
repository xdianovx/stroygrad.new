import Image from 'next/image'

import { TeamScrollCard } from './TeamScrollCard'
import cn from 'classnames'

export interface iTeamScrollSection {
  data: any
  className?: string
}
export const TeamScrollSection = ({ data, className }: iTeamScrollSection) => {
  return (
    <section
      className={cn('', className)}
      data-scroll-section
      data-scroll-section-inview
      data-persistent
      id="fix2"
    >
      <div
        className="container h-full md:h-auto"
        data-scroll
        data-scroll-sticky
        data-scroll-target="#fix2"
      >
        <div className="flex items-end  pt-[270px] md:pt-[120px] sm:flex-col sm:items-start">
          <h2 className="text-[300px] leading-none xl:text-[200px] sm:text-[60px] ">
            Команда
          </h2>
          <p className="ml-24 leading-none mb-[50px] md:mb-0 md:ml-0 sm:mr-auto sm:text-gray sm:text-sm">
            (32 человека)
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col gap-20 md:mt-20">
          {data.map((item: any) => (
            <TeamScrollCard data={item} className="" />
          ))}
        </div>
      </div>
    </section>
  )
}
