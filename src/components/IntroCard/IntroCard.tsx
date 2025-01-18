import * as s from "./IntroCard.style";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type TIntroCard = {
  data: Data;
  buttonVisible: boolean;
};

type Data = {
  first?: string;
  second: string;
  third: string;
  imgSrc: string;
};

const IntroCard = (props: TIntroCard) => {
  const navigate = useNavigate();

  return (
    <s.IntroCardContainer>
      <s.TextContainer>
        {props.data.first && (
          <span className="intro-heding">{props.data.first}</span>
        )}
        <span className="hello">{props.data.second}</span>
        <span className="description">{props.data.third}</span>
        {props.buttonVisible && (
          <Button
            action={() => navigate("project")}
            text="View My Works"
          ></Button>
        )}
      </s.TextContainer>
      <s.ImageContainer>
        <img
          src={props.data.imgSrc}
          style={{ height: "100%", width: "100%" }}
        />
      </s.ImageContainer>
    </s.IntroCardContainer>
  );
};

export default IntroCard;
