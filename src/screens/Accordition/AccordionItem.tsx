import cn from 'classnames'

import s from './Accordition.module.scss'

export interface iAccorditionItem {
  title: string
  num: string
  link: string
  data: any
}

export const AccordionItem = ({ title, num }: iAccorditionItem) => {
  return (
    <div
      className={cn(
        s.item,
        'border-t border-gray px-12 py-4 last-of-type:border-b',
      )}
    >
      <div className="container">
        <div className={cn(s.item__wrap)}>
          <div className={cn(s.item__head, 'grid-2')}>
            <div>{num}</div>
            <div className="flex items-center">
              <h2 className={s.item__title}>{title}</h2>
              <div className={cn(s.circle, 'border border-black')}></div>
            </div>
          </div>
          <div className={s.item__content}></div>
        </div>
      </div>
    </div>
  )
}
