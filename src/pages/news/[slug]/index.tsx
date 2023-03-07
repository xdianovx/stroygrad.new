import Head from 'next/head'
import Image from 'next/image'

import Image2Src from './image2.jpg'
import Image3Src from './image3.jpg'
import ImageSrc from './image.jpg'

import s from './index.module.scss'

import MainLayout from '@/layouts/MainLayout'

import { CallbackForm, NewsUpsale } from '@/components/index'

import { ContentImage, LinkCircle, TextSm, Title } from '@/ui/index'

export default function NewsPage() {
  const tags = [
    { id: 1, title: 'заселение' },
    { id: 2, title: 'жизньвстройграде' },
    { id: 3, title: 'праздник' },
  ]
  return (
    <>
      <Head>
        <title></title>
      </Head>

      <MainLayout>
        <section
          className="mt-[320px] xl:mt-[260px] lg:mt-[200px] sm:mt-[180px]"
          data-scroll-section
        >
          <div className="container">
            <p className="sm:text-sm">21.10.2023</p>
            <div className="flex sm:flex-col">
              <h1 className="text-[90px] xl:text-[64px] md:text-[48px] sm:leading-[110%] sm:mt-6">
                Жк Абрикос литер 1 - сдан
              </h1>
              <LinkCircle
                link="/projects/test"
                text="Перейти к проекту"
                className="ml-auto md:mt-8 sm:ml-0 sm:mt-10"
              />
            </div>

            <div className="tags flex gap-4 md:mt-8 sm:hidden">
              {tags.map((item, idx) => (
                <p className="text-gray" key={item.id}>
                  #{item.title}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8" data-scroll-section>
          <div className="relative sm:h-[440px]">
            <Image
              src={ImageSrc}
              alt={''}
              className="sm:h-full sm:object-cover"
            />
          </div>
        </section>

        <section className="mt-[180px] sm:mt-[60px]" data-scroll-section>
          <div className="container">
            <div className="grid-2 md:grid-cols-1">
              <div></div>
              <div>
                <Title tag="h2">
                  Уважаемые
                  <br />
                  участники долевого строительства
                </Title>

                <TextSm
                  className="mt-20 lg:mt-12 sm:mt-8"
                  text="29 декабря 2018 года был введен в эксплуатацию многоквартирный дом по адресу г. Краснодар,
                        ул. 5-я Дорожная, 68 корпус 1. Всего в доме насчитывается 384 квартиры. Также застройщик благоустроил придомовую территорию и установил большую детскую площадку. Жк Абрикос один из ярких проектов микрорайона молодежный, который находится в самом его сердце. На первом этаже в доме располагаются коммерческие помещения."
                />
                <ContentImage
                  className="mt-20 sm:mt-8"
                  image={Image2Src}
                  label="В первый день начала монолитных работ"
                />
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-section className="mt-[320px] sm:mt-[150px]">
          <div className="container">
            <div className="grid grid-cols-4  md:grid-cols-2">
              <ContentImage
                image={Image3Src}
                label="В первый день начала монолитных работ "
              />
            </div>
          </div>
        </section>

        <section className="mt-[180px] sm:mt-[150px]" data-scroll-section>
          <div className="container">
            <div className="grid-2  md:grid-cols-1">
              <div></div>
              <div>
                <ContentImage
                  className="mt-20"
                  image={Image2Src}
                  label="В первый день начала монолитных работ"
                />
                <TextSm
                  className="mt-20"
                  text="29 декабря 2018 года был введен в эксплуатацию многоквартирный дом по адресу г. Краснодар,
                        ул. 5-я Дорожная, 68 корпус 1. Всего в доме насчитывается 384 квартиры. Также застройщик благоустроил придомовую территорию и установил большую детскую площадку. Жк Абрикос один из ярких проектов микрорайона молодежный, который находится в самом его сердце. На первом этаже в доме располагаются коммерческие помещения."
                />
                <ContentImage className="mt-48 sm:mt-8" image={Image2Src} />
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-section className="mt-[320px] sm:mt-[150px]">
          <div className="container">
            <div className="grid grid-cols-4  md:grid-cols-2">
              <ContentImage
                image={Image3Src}
                label="В первый день начала монолитных работ "
              />
            </div>
          </div>
        </section>

        <section className="mt-[180px] sm:mt-[150px]" data-scroll-section>
          <div className="container">
            <div className="grid-2">
              <div></div>
              <div>
                <TextSm
                  className="mt-20"
                  text="У нас хорошие новости! Открытие строительства и продаж Жк Достояние. Уютный жилой комплекс по ул. Апанасенковской, практически в центре города Ставрополь. Просторные планировки, яркий фасад, качество строительства - вот главные особенности нового дома. Более подробно - в наших отедалх продаж. Ждем вас в гости.
                  "
                />
              </div>
            </div>
          </div>
        </section>

        <CallbackForm />
        <NewsUpsale className="mt-[585px] sm:mt-[150px]" />
      </MainLayout>
    </>
  )
}
