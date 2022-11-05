import React, { FC } from "react";
import { SButton } from "./Button.style";

interface IButton {
  children: React.ReactNode;
  background?: string;
  icon?: string;
  onClick?: () => void;
  color?: string;
  width?:string;
}

const Button: FC<IButton> = ({ background, children, icon, onClick,color,width}) => {
  return (
    <SButton onClick={onClick} style={{ backgroundColor: background , width:width }} >
      <span  style={{color:color}}  >{children} </span>
      {icon ? <img src={icon} alt="11" /> : null}
    </SButton>
  );
};

export default Button;
