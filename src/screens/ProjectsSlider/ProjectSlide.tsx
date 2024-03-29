import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import { LinkCircle } from '@/ui/index'

interface iProjectSlide {
  data: any
}

export const ProjectSlide = ({ data }: iProjectSlide) => {
  return (
    <div className="w-full">
      <Image
        className="w-full block object-cover h-[710px]"
        src={data.img}
        alt={data.title}
      />

      <div className="flex items-center pt-5 pb-2">
        <h2 className="text-3xl leading-none">{data.title}</h2>
        <div className="flex mx-auto">
          {data.params.map((item: any, idx: number) => (
            <>
              <p className="leading-none">/</p>
              <p className="leading-none mx-7" key={idx}>
                {item}
              </p>
            </>
          ))}
        </div>

        <div className="ml-auto mr-5 w-8 h-8 flex justify-center">
          <LinkCircle link={data.link} className="mx-auto" text={''} />
        </div>
      </div>
    </div>
  )
}
