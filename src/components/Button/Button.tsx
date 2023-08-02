import React from "react";
import * as s from "./Button.styles";

type TButton = {
  text: string;
  action: any;
};

const Button = (props: TButton) => {
  return (
    <s.ButtonContainer onClick={props.action}>{props.text}</s.ButtonContainer>
  );
};

export default Button;
