import Link from 'next/link'

import classNames from 'classnames'
import cn from 'classnames'

import s from './Fillial.module.scss'

import { PinLink } from '@/ui/index'

export interface iFillial {
  title: string
  name: string
  address: string
  phone: string | string[]
  className?: string
}

export const Fillial = ({
  title,
  className,
  name,
  address,
  phone,
}: iFillial) => {
  return (
    <div className={cn(className)}>
      <div
        className={cn(
          s.card,

          'border-b',
          'border-gray',
          'pb-[73px]',
        )}
      >
        <div className="container">
          <div className="grid grid-cols-[1fr_972px]">
            <div className="col-start-2">
              <span>Филлиал</span>
              <div className="flex items-center">
                <h2 className="text-[100px]">{title}</h2>
                <PinLink className="ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray">
        <div className="container">
          <div className="grid py-[60px] grid-cols-[1fr_486px_486px]">
            <p className="text-[40px] leading-tight">{name}</p>
            <div>
              <p className="text-grayDark mb-4">Aдрес:</p>
              <p className="text-xl">{address}</p>
            </div>
            <div>
              <p className="text-grayDark mb-4">Телефон:</p>
              <Link href={`tel:${phone}`} className="text-xl">
                {phone}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
