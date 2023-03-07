import cn from 'classnames'

import s from './TextSm.module.scss'

export interface iTextSm {
  className?: string | string[]
  text: string | string[]
}

export const TextSm = ({ className, text }: iTextSm) => {
  return (
    <p
      className={cn(
        'text-[40px] leading-[52px] font-normal xl:text-[32px] lg:text-[28px] lg:leading-[140%] md:text-[20px] sm:text-[18px]',
        className,
      )}
    >
      {text}
    </p>
  )
}
