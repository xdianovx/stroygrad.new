import Image from 'next/image'

import cn from 'classnames'

export interface iContentImage {
  className?: string | string[]
  image: string | any
  label?: string
}

export const ContentImage = ({ className, image, label }: iContentImage) => {
  return (
    <div className={cn('w-full', className)}>
      <div className="relative h-[680px] lg:h-[480px]">
        <Image src={image} alt={label} fill className="object-cover" />
      </div>
      {label && <p className="mt-8 leading-[120%] md:mt-4">{label}</p>}
    </div>
  )
}
