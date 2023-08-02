import React from "react";
import * as s from "./IntroCard.style";
import Button from "../Button/Button";

type TIntroCard = {
  data: Data;
  buttonVisible: boolean;
};

type Data = {
  first: string;
  second: string;
  third: string;
};

const IntroCard = (props: TIntroCard) => {
  return (
    <s.IntroCardContainer>
      <s.TextContainer>
        <span className="intro-heding">{props.data.first}</span>
        <span className="hello">{props.data.second}</span>
        <span className="description">{props.data.third}</span>
        {props.buttonVisible && (
          <Button
            action={() => console.log("clicked")}
            text="View My Works"
          ></Button>
        )}
      </s.TextContainer>
      <s.ImageContainer>
        <img src="./exArt.jpg" style={{ height: "100%", width: "100%" }} />
      </s.ImageContainer>
    </s.IntroCardContainer>
  );
};

export default IntroCard;
