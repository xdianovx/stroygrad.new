import s from "./CompanyGroup.module.scss";

import { TextMd } from "../../ui";

import Img1 from "./1.png";
import Img2 from "./2.png";
import Img3 from "./3.png";
import Img4 from "./4.png";
import Img5 from "./5.png";
import Img6 from "./6.png";
import Image from "next/image";

export const CompanyGroup = () => {
  const text =
    "В состав группы входят не только\nстроительные предприятия,\nно и компании занимающиеся\nэкспертизой промышленной\nбезопасности.";
  const subText =
    "Каждое из направление усиливает уровень\nсервиса в целом всей компании";

  const companies = [Img1, Img2, Img3, Img4, Img5, Img6];

  return (
    <section className="">
      <div className="container">
        <div className="grid grid-cols-[1fr_972px]">
          <div>
            <p className="text-grayDark text-sm">Группа компаний</p>
          </div>

          <div>
            <TextMd>{text}</TextMd>
            <p className="mt-[68px]">{subText}</p>

            <div className="grid grid-cols-2 mt-[177px] gap-[104px]">
              {companies.map((item, idx) => (
                <div key={idx} className="relative">
                  <Image src={item} alt="Партнер" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
