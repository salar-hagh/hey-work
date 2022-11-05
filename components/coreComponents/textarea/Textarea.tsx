import React, { FC } from "react";
import { STextarea } from "./Textarea.style";

interface ITextarea {
  label?: string;
  onChange?: (e: any) => void;
  placeholder?: string;
}

const Textarea: FC<ITextarea> = ({ label, onChange, placeholder }) => {
  return (
    <STextarea>
      {label && <label htmlFor=""> {label} </label>}

      <textarea
        className="text-area"
        name=""
        id=""
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </STextarea>
  );
};

export default Textarea;
