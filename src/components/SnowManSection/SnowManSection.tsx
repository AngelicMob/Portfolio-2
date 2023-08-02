import React from "react";
import * as s from "./SnowManSection.style";
import { Link } from "react-router-dom";

type TSnowManSection = {
  data: SnowManData[];
};

type SnowManData = {
  linkTo: string;
  imgSrc: string;
  title: string;
};

const SnowManSection = (props: TSnowManSection) => {
  return (
    <s.SnowManSectionContainer>
      {props.data &&
        props.data.map((e: SnowManData) => {
          return (
            <Link to={e.linkTo} style={{ textDecoration: "none" }}>
              <s.SnowManContainer>
                <span className="cardTitle">{e.title}</span>
                <s.ImageContainer>
                  <img
                    src={e.imgSrc}
                    alt="iconImage"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "100%",
                    }}
                  ></img>
                </s.ImageContainer>
              </s.SnowManContainer>
            </Link>
          );
        })}
    </s.SnowManSectionContainer>
  );
};

export default SnowManSection;
