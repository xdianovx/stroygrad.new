import { ButtonArrow, Input, TextMd } from '../../ui'
import { Checkbox } from '../../ui/Checkbox/Checkbox'
import cn from 'classnames'

import s from './CooperationForm.module.scss'

export interface iCooperationForm {
  className?: string
}

export const CooperationForm = ({ className }: iCooperationForm) => {
  const text =
    'Приглашаем к сотрудничеству агентства недвижимости и независимых риелторов!'
  const subTitle = 'Мы за прочные\nи взаимовыгодные отношения'
  const checkText =
    'Нажимая на кнопку «Оставить заявку», вы даете\nсогласие на обработку персональных данных'

  return (
    <section className={cn(className)} data-scroll-section>
      <div className="container">
        <div className="grid grid-cols-[1fr_972px]">
          <div>
            <p className="text-gray">Сотрудничество</p>
          </div>

          <div>
            <TextMd text={text} />
            <p className="mt-[58px]">{subTitle}</p>

            <form className="mt-[147px] flex flex-col gap-12">
              <Input label="Компания" type="text" />
              <Input label="Контактное лицо " type="text" />
              <Input label="Телефон" type="text" />
              <Input label="E-mail" type="text" />
              <div className="flex">
                <Checkbox form="" label={checkText} id="asd" />
                <ButtonArrow className="ml-auto" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
