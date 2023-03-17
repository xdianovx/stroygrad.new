import Image from 'next/image'

import cn from 'classnames'

export interface iTeamCard {
  data: any
  className?: string
}

export const TeamCard = ({ data, className }: iTeamCard) => {
  return (
    <div className={cn(className, '')}>
      <div className="relative h-full">
        <Image
          fill
          src={data.image}
          alt={''}
          className="block h-full object-cover"
        />
      </div>

      <div className="flex items-end mt-14">
        <div className="text-[56px] leading-[110%] max-w-[445px]">
          {data.name}
        </div>
        <div className="text-gray mx-4">/</div>
        <div className="text-md text-gray shrink-0">{data.position}</div>
      </div>
    </div>
  )
}
