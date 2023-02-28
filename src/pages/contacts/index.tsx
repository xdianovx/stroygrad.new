import Head from 'next/head'
import Link from 'next/link'

import { Fillial } from '@/screens/index'
import cn from 'classnames'

import s from './contacts.module.scss'

import MainLayout from '@/layouts/MainLayout'

import { CompanyGroup, CooperationForm } from '@/components/index'

import { PinLink, Title } from '@/ui/index'

export default function Contacts() {
  const fillials = [
    {
      id: 1,
      title: 'Ростов-на-Дону',
      name: 'Представительство\nи отдел продаж',
      address: 'г. Ставрополь, ул. Чапаева, 4/1',
      phone: '8 (8652) 23 01 33',
    },
    {
      id: 2,
      title: 'Краснодар',
      name: 'Представительство\nи отдел продаж',
      address: 'г. Краснодар, ул. 5-ая дорожная, 68к3',
      phone: '8 (861) 991-09-19',
    },
    {
      id: 3,
      title: 'Новоросийск',
      name: 'Представительство\nи отдел продаж',
      address: 'г. Ставрополь, ул. Чапаева, 4/1',
      phone: '8 (8652) 23 01 33',
    },
    {
      id: 4,
      title: 'Воронеж',
      name: 'Представительство\nи отдел продаж',
      address: 'г. Ставрополь, ул. Чапаева, 4/1',
      phone: '8 (8652) 23 01 33',
    },
  ]
  return (
    <>
      <Head>
        <title>Стройград | Контакты</title>
      </Head>

      <MainLayout>
        <section className={cn(s.hero, 'border-b', 'border-gray')}>
          <div className="container ">
            <div className="h-full flex items-end ">
              <div className="w-full">
                <p className="mb-24 leading-none">Главный офис</p>
                <div className="flex items-end ">
                  <Title tag="h1" className={s.hero__title}>
                    Ставрополь
                  </Title>
                  <PinLink className="ml-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={s.cabinet}>
          <div className={cn(s.cabinet__item, 'border-b', 'border-gray')}>
            <div className="container">
              <div className="grid grid-cols-3  min-h-[290px] pt-[90px]">
                <p className="text-[40px]">Отдел продаж</p>
                <div className="flex flex-col">
                  <span className="mb-5 text-grayDark">Адрес:</span>
                  <p className="text-xl">г. Ставрополь, ул. Чапаева, 4/1</p>
                </div>

                <div className="flex flex-col">
                  <span className="mb-5 text-grayDark">Телефон:</span>
                  <Link href="tel:+78652239033" className="text-xl mb-2">
                    8 (8652)-23-90-33
                  </Link>
                  <Link href="tel:+79189488592" className="text-xl">
                    8 (918) 948-85-92
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={cn(s.cabinet__item, 'border-b', 'border-gray')}>
            <div className="container">
              <div className="grid grid-cols-3  min-h-[290px] pt-[90px]">
                <p className="text-[40px]">Представительство</p>
                <div className="flex flex-col">
                  <span className="mb-5 text-grayDark">Адрес:</span>
                  <p className="text-xl">г. Ставрополь, ул. Чапаева, 4/1</p>
                </div>

                <div className="flex flex-col">
                  <span className="mb-5 text-grayDark">Телефон:</span>
                  <Link href="tel:+78652230133" className="text-xl mb-2">
                    8 (8652) 23 01 33
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[242px]">
          {fillials.map((item) => (
            <Fillial
              key={item.id}
              title={item.title}
              name={item.name}
              address={item.address}
              phone={item.phone}
              className="mb-[207px]"
            />
          ))}
        </section>

        <CompanyGroup />

        <CooperationForm className="mt-[600px]" />
      </MainLayout>
    </>
  )
}
