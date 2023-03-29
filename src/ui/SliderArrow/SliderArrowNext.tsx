import Arrow from './arrow.svg'
import cn from 'classnames'

interface iSliderArrow {
  refEl: any
  className?: string
  props?: any
}

export const SliderArrowNext = ({ refEl, className, props }: iSliderArrow) => {
  return (
    <div
      ref={refEl}
      {...props}
      className="cursor-pointer w-[50px] h-[50px] dark:border-white rounded-full transition-colors border flex items-center justify-center border-gray group hover:bg-black hover:border-black dark:hover:bg-white"
    >
      <Arrow className="stroke-black  dark:stroke-white transition-colors group-hover:stroke-white dark:group-hover:stroke-black" />
    </div>
  )
}
