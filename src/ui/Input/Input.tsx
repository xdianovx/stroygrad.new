import cn from 'classnames'
import { useState } from 'react'

import s from './Input.module.scss'

export interface iInput {
  label: string
  className?: string | string[]
  errors?: any
  type: 'text' | 'email' | 'phone'
  props?: any
}

export const Input = ({
  label,
  className,
  errors,
  type,
  ...props
}: iInput): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e: any) => {
    console.log(inputValue.length > 0)
    setInputValue(e.target.value)
    if (inputValue.length > 0) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  switch (type) {
    case 'text':
      return (
        <div
          className={cn(s.wrap, className, {
            [s.active]: isOpen,
          })}
        >
          <label className={cn(s.label, 'text-sm')}>{label}</label>
          <input
            className={cn(s.input, 'border-b', 'border-gray')}
            onChange={handleInput}
            type="text"
            value={inputValue}
          />
        </div>
      )

    case 'email':
      return (
        <div
          className={cn(s.wrap, className, {
            [s.active]: isOpen,
          })}
        >
          <label className={cn(s.label, 'text-sm')}>{label}</label>
          <input
            className={cn(s.input, 'border-b', 'border-gray')}
            onChange={handleInput}
            type="text"
            value={inputValue}
          />
        </div>
      )

    default:
      return <input />
  }
}
