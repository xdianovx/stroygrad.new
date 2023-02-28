import s from "./Checkbox.module.scss";

export interface iCheckbox {
  id: any;
  form: any;
  label: string;
  onClick?: any;
}

export const Checkbox = ({ id, label, form, ...props }: iCheckbox) => {
  return (
    <div className={s.checkbox}>
      <input id={id} type="checkbox" {...props} {...form} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
