import s from "./PinLink.module.scss";
import Icon from "./pin.svg";
import cn from "classnames";

export interface iPinLink {
  className?: string;
}

export const PinLink = ({ className }: iPinLink) => {
  return (
    <div className={cn(s.pin, className)}>
      <Icon />
    </div>
  );
};
