import { Input } from "antd";
import React, { FC } from "react";
import { SRadioButton } from "./RadioButton.style";

interface IRadioButton {
  name?: string;
  label?: string;
  id?: string;
}

const RadioButton: FC<IRadioButton> = ({ name, id, label }) => {
  return (
    <SRadioButton>
      <label htmlFor={id}>{label}</label>
      <input type="radio" name={name} id={id} />
    </SRadioButton>
  );
};

export default RadioButton;
