import { Input } from "antd";
import { FC } from "react";
import { SCheckbox } from "./Checkbox.style";

interface ICheckbox {
  name?: string;
  label?: string;
  id?: string;
}

const Checkbox: FC<ICheckbox> = ({ name, id, label }) => {
  return (
    <SCheckbox>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" name={name} id={id} />
    </SCheckbox>
  );
};

export default Checkbox;
