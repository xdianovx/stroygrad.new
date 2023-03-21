import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import HeroSrc from './hero.png'
import ImgSrc1 from './img1.png'
import ImgSrc2 from './img2.png'
import ImgSrc3 from './img3.png'
import ImgSrc4 from './img4.png'
import ImgSrc5 from './img5.png'
import { NextProject } from '@/screens/index'

import MainLayout from '@/layouts/MainLayout'

import { PinLink, TextMd, Title } from '@/ui/index'

export default function ProjectPage() {
  const features = [
    {
      id: 1,
      num: '01',
      title: 'Окружение',
      text: 'Паноравные виды\nна красивое озеро ',
    },
    {
      id: 2,
      num: '02',
      title: 'Арихтектура',
      text: 'Авторская архитектура\nот известного бюро',
    },
    {
      id: 3,
      num: '03',
      title: 'Паркинг',
      text: 'Авторская архитектура\nот известного бюро',
    },
  ]
  return (
    <>
      <Head></Head>
      <MainLayout>
        <section className="mt-[380px]" data-scroll-section>
          <div className="container">
            <div className="flex flex-col gap-10">
              <p className="text-[28px] leading-none">
                Жилой
                <br />
                комплекс
              </p>
              <Title tag="h1">Семейный квартал</Title>
            </div>
          </div>
        </section>

        <section className="mt-[90px]" data-scroll-section>
          <Image src={HeroSrc} alt={''} />
        </section>

        <section
          className="mt-[75px] border-b border-grayBorder pb-16"
          data-scroll-section
        >
          <div className="container">
            <div className="flex justify-between">
              {features.map((item) => (
                <div className="flex gap-4" key={item.id}>
                  <span className="text-[40px]">/</span>
                  <div className="text-[120px] leading-none">{item.num}</div>
                  <div className="flex flex-col gap-5 mt-2">
                    <h3 className="text-[32px] leading-none">{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-24" data-scroll-section>
          <div className="container">
            <div className="grid-2">
              <div></div>
              <div className="flex flex-col">
                <span className="text-gray">Сайт:</span>
                <Link
                  href="https://xn----8sbagoae1aaffpfq3cg1a0n.xn--p1ai/"
                  target="_blank"
                  className="underline underline-offset-2 text-2xl"
                >
                  жк-семейныйквартал.рф
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-60" data-scroll-section>
          <div className="container">
            <div className="grid-2">
              <p className="text-xl">
                Новый массивный жилой <br /> комплекс в уютном месте <br /> в г.
                Ставрополь
              </p>

              <div className="flex flex-col">
                <TextMd
                  text={
                    '«Семейный квартал» — это экологичный проект рядом с Дубковским и Подушкинским лесами. Он сочетает близость к природным комплексам, престижный статус западного направления и возможность удобно добраться до столицы. Уютная малоэтажная застройка, евроквартиры с чистовой отделкой, закрытый двор без машин — квартал станет по-настоящему «своей» территорией, куда хочется возвращаться.'
                  }
                />

                <div className="grid grid-cols-2 mt-64 gap-[140px]">
                  <div className="flex flex-col gap-3">
                    <span className="text-xl">Ближайшее метро</span>
                    <p className="text-[48px] leading-[120%]">Ставропольская</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-xl">Готово:</span>
                    <p className="text-[48px] leading-[120%]">5 домов</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-xl">Построен:</span>
                    <p className="text-[48px] leading-[120%]">в 2022 году</p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-xl">Цена:</span>
                    <p className="text-[48px] leading-[120%]">
                      от 43,3 млн. руб.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-96" data-scroll-section>
          <div className="container">
            <div className="grid-2 items-end">
              <div>
                <Title tag="h2">Фотографии объекта</Title>
              </div>
              <div className="flex items-end">
                <p>(25+ фотографий)</p>
                <PinLink className="ml-auto fill-gray" />
              </div>
            </div>

            <div className="grid-2 gap-10 h-[800px] mt-10">
              <div>
                <Image src={ImgSrc1} fill alt={''} />
              </div>
              <div>
                <Image src={ImgSrc2} fill alt={''} />
              </div>
            </div>
            <p className="max-w-[380px] mt-10">
              Уютная малоэтажная застройка, евроквартиры с чистовой отделкой,
              закрытый двор без машин — квартал станет по-настоящему «своей»
              территорией, куда хочется возвращаться.
            </p>

            <div>
              <Image src={ImgSrc3} alt={''} className="mt-60" />
              <div className="grid-2 mt-10">
                <div></div>
                <p className="max-w-sm">
                  Уютная малоэтажная застройка, евроквартиры с чистовой
                  отделкой, закрытый двор без машин — квартал станет
                  по-настоящему «своей» территорией, куда хочется возвращаться.
                </p>
              </div>
            </div>

            <div className="grid-2 mt-96">
              <div></div>
              <Image src={ImgSrc2} />
            </div>

            <div className="grid-2 mt-96">
              <div className="max-w-sm flex flex-col gap-6">
                <Image src={ImgSrc4} />
                <p>
                  Уютная малоэтажная застройка, евроквартиры с чистовой
                  отделкой, закрытый двор без машин — квартал станет
                  по-настоящему «своей» территорией, куда хочется возвращаться.
                </p>
              </div>

              <Image src={ImgSrc5} />
            </div>

            <Image src={ImgSrc3} alt={''} className="mt-60" />
          </div>
        </section>

        <NextProject className="mt-96" />
      </MainLayout>
    </>
  )
}
