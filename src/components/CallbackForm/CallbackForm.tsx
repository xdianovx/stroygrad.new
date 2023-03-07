import cn from 'classnames'

import s from './CallbackForm.module.scss'

import { ButtonArrow, Input, TextMd } from '@/ui/index'

export interface iCallbackForm {
  className?: string
}

export const CallbackForm = ({ className }: iCallbackForm) => {
  return (
    <section className={cn(className, 'mt-[494px]')} data-scroll-section>
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-1">
          <div className="text-gray text-sm">Новости для вас</div>
          <div>
            <TextMd
              text="Заполните форму, что-бы мы могли отправлять вам на почту самые актуальные новости компании"
              className="sm:mt-14"
            />

            <form className="flex mt-[169px] gap-4 sm:mt-14">
              <Input
                label="Почта"
                type="email"
                className="flex-grow"
                placeholder="Почта"
              />
              <ButtonArrow />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
