import Link from 'next/link'

import LogoSvg from './Logo.svg'
import cn from 'classnames'

import s from './Logo.module.scss'

export interface iLogo {
  className: string
}

export const Logo = ({ className }: iLogo) => {
  return (
    <Link href="/" className={cn(className)}>
      <LogoSvg />
    </Link>
  )
}
