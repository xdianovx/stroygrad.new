import { Swiper, SwiperSlide } from "swiper/react";
import { LinkCircle, TextMd } from "../../ui";
import s from "./HeadStuff.module.scss";

export const HeadStuff = () => {
  const text =
    "Благодаря большому опыту и мастерству\nруководящего состава все компании\nработают как слаженная команда\nпрофессионалов, ведомая единой целью —\nудовлетворение интересов любимого\nпотребителя. ";
  return (
    <section className={s.section}>
      <div className="container">
        <p className="text-sm text-gray">Руководство</p>
        <div className="flex items-end mt-[106px]">
          <TextMd>{text}</TextMd>
          <LinkCircle link="/team" className="ml-auto">
            Команда
          </LinkCircle>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </section>
  );
};
