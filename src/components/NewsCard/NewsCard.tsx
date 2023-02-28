import s from "./NewsCard.module.scss";

import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

export interface iNewsCard {
  className?: string | string[];
  data: {
    title: string;
    date: string;
    image?: string;
    link: string;
    dark: boolean;
  };
}

export const NewsCard = ({ data, className }: iNewsCard) => {
  return (
    <Link href={data.link} className={cn(s.card, className, "h-[534px]")}>
      <div
        className={cn("relative h-full", {
          ["text-white "]: data.dark,
          ["text-black"]: !data.dark,
        })}
      >
        <div
          className={cn("h-full left-0 top-0 ", {
            ["bg-black "]: data.dark,
            ["bg-grayBg"]: !data.dark,
          })}
        >
          {data.image && (
            <Image
              src={data.image}
              fill
              alt={data.title}
              className="block h-full"
            />
          )}
        </div>
        <div className="absolute z-10 top-0 h-full w-full flex flex-col py-[48px] px-[48px]">
          <h2>{data.title}</h2>
          <p className="mt-auto ml-auto text-[56px]">{data.date}</p>
        </div>
      </div>
    </Link>
  );
};
