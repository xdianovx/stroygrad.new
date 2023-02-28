import s from "./ButtonArrow.module.scss";

import cn from "classnames";

import IconSvg from "./Icon.svg";

export interface iButtonArrow {
  className?: string;
}

export const ButtonArrow = ({ className }: iButtonArrow) => {
  return (
    <button className={cn(s.btn, className)}>
      <IconSvg />
    </button>
  );
};
