import React, { FC } from "react";
import { SInput } from "./Input.style";

interface IInput {
  label?: string;
  // eslint-disable-next-line no-unused-vars
  onChange?: (e?: any) => void;
  value?: string | number;
  id?: string
}

const Input: FC<IInput> = ({ label, onChange, value ,id}) => {
  return (
    <SInput>
      <label htmlFor="">{label}</label>
      <input data-id={id} onChange={onChange} type="text" value={value} />
    </SInput>
  );
};

export default Input;
