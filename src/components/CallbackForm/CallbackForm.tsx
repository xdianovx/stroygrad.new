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
        <div className="grid grid-cols-2">
          <div className="text-grayDark">Новости для вас</div>
          <div>
            <TextMd>
              Заполните форму, что-бы мы могли отправлять вам на почту самые
              актуальные новости компании
            </TextMd>

            <form className="flex mt-[169px] gap-4">
              <Input label={'Почта'} type="email" className="flex-grow" />
              <ButtonArrow />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
