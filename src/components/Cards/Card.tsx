import React from "react";
import * as s from "./Card.style";
import { ItemList } from "../SectionList2/SectionList2";

type TCard = {
  withImage: boolean;
  data: ItemList;
};
const Card = (props: TCard) => {
  return (
    <s.CardContainer>
      {props.withImage && (
        <s.ImageContainer>
          <img
            src={props.data.imgSrc}
            alt="iconImage"
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
          ></img>
        </s.ImageContainer>
      )}
      <s.TextContainer>
        <span className="cardTitle">{props.data.title}</span>
        <span className="cardDescription">{props.data.description}</span>
      </s.TextContainer>
    </s.CardContainer>
  );
};

export default Card;
